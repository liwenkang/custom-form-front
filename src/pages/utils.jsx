// 自定义字段初始化
const handleFieldsInitial = (customFormResponse, detailResponse) => {
  const { fields, linkages } = customFormResponse;
  const {
    canViewAll,
    cmUseMode,
    extConf,
    flowId,
    menuId,
    opCodes,
    plan,
    sysParams,
  } = detailResponse;

  let result = fields;
  // 将 linkages 中涉及到的字段都隐藏
  const _handleLinkagesFieldHide = () => {
    // 将 linkages 中涉及到的字段都默认隐藏
    let needHideFieldCode = new Set();
    for (let field in linkages) {
      for (let key in linkages[field]) {
        linkages[field][key]
          .filter((item) => item.visible === false)
          .map((item) => item.code)
          .forEach((element) => {
            needHideFieldCode.add(element);
          });
        break;
      }
    }
    return result.map((item) => {
      item.hide = needHideFieldCode.has(item.code);
      return item;
    });
  };
  result = _handleLinkagesFieldHide();

  // 详情返回后,特出处理字段显隐
  const _handleFieldVisibleControl = () => {
    // 当没有方案类型的时候,不显示执行上报模版
    return fields.map((item) => {
      if (!plan.planType && item.code === "record_form_id") {
        item.hide = true;
      }
      return item;
    });
  };
  result = _handleFieldVisibleControl();

  // 自定义渲染
  const _handleRender = () => {
    const _handleSelfRender = (field) => {
      // 纯自定义渲染
      return () => {
        return <div>{field.code}</div>;
      };
    };

    // 更改 render
    const _handleFieldRender = (field) => {
      const transformTypeToAntdMap = {
        6: "DatePicker",
        " ": "RangePicker",
        1: "Input",
        2: "Input.TextArea",
        17: "InputNumber",
        "  ": "Radio.Group",
        4: "Select",
        5: "Select",
        9: "Upload",
      };

      const transformCodeToAntdMap = {
        exe_cycle: "RangePicker",
      };

      if (field.type === "4") {
        field.mode = "multiple";
      }
      if (transformTypeToAntdMap[field.type]) {
        field.type = transformTypeToAntdMap[field.type];
      } else if (transformCodeToAntdMap[field.code]) {
        field.type = transformCodeToAntdMap[field.code];
      } else {
        // antd 满足不了的
        field.render = _handleSelfRender(field);
      }
      return field;
    };

    // 将非 antd 渲染的业务字段单独写 render
    return fields.map((item) => {
      item = _handleFieldRender(item);
      return item;
    });
  };
  result = _handleRender();

  // 将详情数据加入
  const _handleAddDetail = () => {
    return fields.map((item) => {
      if (item.code === "code") {
        item.value = plan.code;
      }

      // planType: null,
      // planTypeName: ""
      return item;
    });
  };
  result = _handleAddDetail();

  return result;
};

// 自定义字段切换时
const handleFieldsChange = (field, fields, linkages) => {
  // 处理 linkages 中的关联关系
  const _handleLinkagesFieldHide = () => {
    let needHideFieldCode = [];
    let needShowFieldCode = [];
    if (linkages[field.code]) {
      needHideFieldCode = linkages[field.code][field.value]
        .filter((item) => item.visible === false)
        .map((item) => item.code);

      needShowFieldCode = linkages[field.code][field.value]
        .filter((item) => item.visible === true)
        .map((item) => item.code);
    }

    return fields.map((item) => {
      if (needHideFieldCode.includes(item.code)) {
        item.hide = true;
      }
      if (needShowFieldCode.includes(item.code)) {
        item.hide = false;
      }
      return item;
    });
  };
  fields = _handleLinkagesFieldHide();

  // 受 活动方案控制 字段
  const _handleFieldChange = () => {
    // 执行上报模版 受方案类型控制
    const handleRecordFormIdChange = (record) => {
      let controlParams = {
        hide: false,
        required: false,
      };
      if (record.id) {
        // 必选上报
        const mustReport = record.must_report;
        const executeMod = record.execute_mod;
        if (mustReport === "1" && executeMod === "1") {
          // 显示,必填
          controlParams.hide = false;
          controlParams.required = true;
        } else if (mustReport === "0" && executeMod === "1") {
          // 显示,非必填
          controlParams.hide = false;
          controlParams.required = false;
        } else {
          // 隐藏,非必填
          controlParams.hide = true;
          controlParams.required = false;
        }
      } else {
        // 隐藏,非必填
        controlParams.hide = true;
        controlParams.required = false;
      }
      return fields.map((item) => {
        if (item.code === "record_form_id") {
          item = {
            ...item,
            ...controlParams,
          };
        }
        return item;
      });
    };

    // 申请可见范围 受方案类型控制
    const handleApplyVisibleRangesChange = (record) => {
      let controlParams = {
        hide: true,
      };
      if (record.id) {
        const executeMod = record.execute_mod;
        controlParams.hide = executeMod === "2";
      }
      return fields.map((item) => {
        if (item.code === "apply_visible_ranges") {
          item = {
            ...item,
            ...controlParams,
          };
        }
        return item;
      });
    };

    if (field.code === "plan_type") {
      const value = field.value;
      const options = field.options;
      const record = options.filter((item) => item.id === value)[0];
      fields = handleRecordFormIdChange(record);
      fields = handleApplyVisibleRangesChange(record);
    }
    return fields;
  };
  fields = _handleFieldChange();

  return fields;
};

export { handleFieldsInitial, handleFieldsChange };
