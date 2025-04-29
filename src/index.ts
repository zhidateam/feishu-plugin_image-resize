import { basekit, FieldType, field, FieldComponent, FieldCode, AuthorizationType } from '@lark-opdev/block-basekit-server-api';
const { t } = field;

// 添加图片处理服务域名到白名单
// 添加本地图片处理服务域名
basekit.addDomainList(['feishu.cn','127.0.0.1','aihubmax.com']);

// 添加授权配置
basekit.addField({
  // 添加字段配置选项
  options: {
    disableAutoUpdate: false, // 关闭自动更新
  },
  // 定义授权配置
  authorizations: [
    {
      id: 'api_key_auth', // 授权ID，用于在execute函数中引用
      type: AuthorizationType.HeaderBearerToken, // 授权类型，使用Bearer Token模式
      label: t('apiKey'),
      instructionsUrl: 'https://nmqccclky7.feishu.cn/wiki/IyXNwS3MYigcp2kp7wucZR8MnuT', // 帮助链接，告诉用户如何获取API Key
      platform: 'aihubmax', // 平台类型
      icon: { // 图标
        light: 'https://zdaif.oss-cn-hangzhou.aliyuncs.com/asset/img/icons/img_resize.svg',
        dark: 'https://zdaif.oss-cn-hangzhou.aliyuncs.com/asset/img/icons/img_resize_dark.svg'
      }
    }
  ],
  // 定义捷径的i18n语言资源
  i18n: {
    messages: {
      'zh-CN': {
        'imageField': '图片字段',
        'description': '按比例裁剪图片',
        'processingFailed': '图片处理失败',
        'ratioType': '裁剪比例类型',
        'ratioTypeDescription': '选择预设比例或自定义比例',
        'presetRatio': '预设比例',
        'customRatio': '自定义比例',
        'widthRatio': '宽度比例',
        'heightRatio': '高度比例',
        'customRatioInput': '自定义比例（宽:高）[优先]',
        'customRatioPlaceholder': '例如：16:9',
        'invalidRatio': '无效的比例值',
        'square': '正方形 (1:1)',
        'portrait': '纵向 (9:16)',
        'landscape': '横向 (16:9)',
        'classic': '经典 (4:3)',
        'widescreen': '宽屏 (21:9)',
        'apiKey': 'API Key',
        'apiKeyDescription': '请输入图片处理服务的 API Key',
        'anchorPosition': '锚点位置',
        'anchorPositionDescription': '选择裁剪的起始位置',
        'topLeft': '左上锚点（Top-Left）',
        'topCenter': '顶部居中锚点（Top-Center）',
        'topRight': '右上锚点（Top-Right）',
        'middleLeft': '左中锚点（Middle-Left）',
        'center': '正中锚点（Center）',
        'middleRight': '右中锚点（Middle-Right）',
        'bottomLeft': '左下锚点（Bottom-Left）',
        'bottomCenter': '底部居中锚点（Bottom-Center）',
        'bottomRight': '右下锚点（Bottom-Right）',
        'preserveEdge': '保留边',
        'preserveEdgeDescription': '选择裁剪时保留的边',
        'preserveWidth': '宽边',
        'preserveHeight': '高边',
        'preserveAuto': '自动识别最长边',
      },
      'en-US': {
        'imageField': 'Image Field',
        'description': 'Crop images while preserving maximum vertical dimension',
        'processingFailed': 'Image processing failed',
        'ratioType': 'Aspect Ratio Type',
        'ratioTypeDescription': 'Choose preset ratio or custom ratio',
        'presetRatio': 'Preset Ratio',
        'customRatio': 'Custom Ratio',
        'widthRatio': 'Width Ratio',
        'heightRatio': 'Height Ratio',
        'customRatioInput': 'Custom Ratio (width:height) [Priority]',
        'customRatioPlaceholder': 'e.g. 16:9',
        'invalidRatio': 'Invalid ratio value',
        'square': 'Square (1:1)',
        'portrait': 'Portrait (9:16)',
        'landscape': 'Landscape (16:9)',
        'classic': 'Classic (4:3)',
        'widescreen': 'Widescreen (21:9)',
        'apiKey': 'API Key',
        'apiKeyDescription': 'Enter the API Key for the image processing service',
        'anchorPosition': 'Anchor Position',
        'anchorPositionDescription': 'Select the starting position for cropping',
        'topLeft': 'Top-Left',
        'topCenter': 'Top-Center',
        'topRight': 'Top-Right',
        'middleLeft': 'Middle-Left',
        'center': 'Center',
        'middleRight': 'Middle-Right',
        'bottomLeft': 'Bottom-Left',
        'bottomCenter': 'Bottom-Center',
        'bottomRight': 'Bottom-Right',
        'preserveEdge': 'Preserve Edge',
        'preserveEdgeDescription': 'Select which edge to preserve during cropping',
        'preserveWidth': 'Width',
        'preserveHeight': 'Height',
        'preserveAuto': 'Auto-detect longest edge',
      },
      'ja-JP': {
        'imageField': '画像フィールド',
        'description': '画像を切り抜き、最大垂直寸法を保持します',
        'processingFailed': '画像処理に失敗しました',
        'ratioType': 'アスペクト比のタイプ',
        'ratioTypeDescription': 'プリセット比またはカスタム比を選択',
        'presetRatio': 'プリセット比',
        'customRatio': 'カスタム比',
        'widthRatio': '幅比',
        'heightRatio': '高さ比',
        'customRatioInput': 'カスタム比（幅:高さ）[優先]',
        'customRatioPlaceholder': '例：16:9',
        'invalidRatio': '無効な比率値',
        'square': '正方形 (1:1)',
        'portrait': 'ポートレート (9:16)',
        'landscape': 'ランドスケープ (16:9)',
        'classic': 'クラシック (4:3)',
        'widescreen': 'ワイドスクリーン (21:9)',
        'apiKey': 'APIキー',
        'apiKeyDescription': '画像処理サービスのAPIキーを入力してください',
        'anchorPosition': 'アンカー位置',
        'anchorPositionDescription': 'クロップの開始位置を選択',
        'topLeft': '左上',
        'topCenter': '上中央',
        'topRight': '右上',
        'middleLeft': '左中央',
        'center': '中央',
        'middleRight': '右中央',
        'bottomLeft': '左下',
        'bottomCenter': '下中央',
        'bottomRight': '右下',
        'preserveEdge': 'エッジを保持',
        'preserveEdgeDescription': 'クロップ中に保持するエッジを選択',
        'preserveWidth': '幅',
        'preserveHeight': '高さ',
        'preserveAuto': '最長エッジを自動検出',
      },
    }
  },
  // 定义捷径的入参
  formItems: [
    {
      key: 'imageField',
      label: t('imageField'),
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.Attachment],
        placeholder: t('description'),
      },
      validator: {
        required: true,
      },
    },
    {
      key: 'customAspectRatio',
      label: t('customRatioInput'),
      component: FieldComponent.Input,
      props: {
        placeholder: t('customRatioPlaceholder'),
      },
    },
    {
      key: 'presetAspectRatio',
      label: t('presetRatio'),
      component: FieldComponent.SingleSelect,
      props: {
        options: [
          { label: t('square'), value: '1:1' },
          { label: t('portrait'), value: '9:16' },
          { label: t('landscape'), value: '16:9' },
          { label: t('classic'), value: '4:3' },
          { label: t('widescreen'), value: '21:9' },
        ],
      },
      defaultValue: { label: t('portrait'), value: '9:16' },
    },

    {
      key: 'anchorPosition',
      label: t('anchorPosition'),
      component: FieldComponent.SingleSelect,
      props: {
        options: [
          { label: t('topLeft'), value: 'top-left' },
          { label: t('topCenter'), value: 'top-center' },
          { label: t('topRight'), value: 'top-right' },
          { label: t('middleLeft'), value: 'middle-left' },
          { label: t('center'), value: 'center' },
          { label: t('middleRight'), value: 'middle-right' },
          { label: t('bottomLeft'), value: 'bottom-left' },
          { label: t('bottomCenter'), value: 'bottom-center' },
          { label: t('bottomRight'), value: 'bottom-right' },
        ],
      },
      defaultValue: { label: t('center'), value: 'center' },
    },
  ],
  // 定义捷径的返回结果类型为附件字段
  resultType: {
    type: FieldType.Attachment,
  },
  // 执行函数
  execute: async (formItemParams: {
    imageField: any[],
    customAspectRatio: string,
    presetAspectRatio: { value: string },
    anchorPosition: { value: string }
  }, context) => {
    const { imageField, customAspectRatio, presetAspectRatio, anchorPosition } = formItemParams;
    const attachment = imageField?.[0];

    // 获取用户选择的裁剪比例
    let selectedRatio: string;

    // 优先使用自定义比例，如果有的话
    if (customAspectRatio) {
      // 处理自定义比例，将中文冒号转换为英文冒号
      selectedRatio = customAspectRatio.replace('：', ':');

      // 验证比例格式是否正确
      if (!selectedRatio.match(/^\d+:\d+$/)) {
        return {
          code: FieldCode.Error,
          msg: t('invalidRatio'),
        };
      }
    } else {
      // 如果没有自定义比例，则使用预设比例
      selectedRatio = presetAspectRatio?.value || '9:16';
    }

    // 获取用户选择的锚点位置
    const selectedAnchor = anchorPosition?.value || 'center';

    if (!attachment || !attachment.tmp_url) {
      return {
        code: FieldCode.Error,
        msg: t('processingFailed'),
      };
    }

    try {
      // 1. 获取原始图片
      const response = await context.fetch(attachment.tmp_url);
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }

      // 2. 获取图片信息
      // 注意：由于我们不能使用sharp等图像处理库，我们需要通过其他方式获取图片信息
      // 这里我们假设图片有宽高信息，实际情况可能需要通过第三方服务获取
      // 在实际实现中，可能需要获取图片buffer进行处理
      // const imageBuffer = await response.buffer();

      // 3. 处理图片 - 裁剪为9:16比例，保留最大纵向尺寸
      // 由于无法直接处理图片，我们需要使用第三方服务
      // 这里使用imgproxy作为示例，实际使用时需要替换为你的图片处理服务

      // 假设我们有一个图片处理服务，可以接收原始图片URL和裁剪参数
      const processingServiceUrl = 'https://aihubmax.com/sapi/plugin/image/resize';
      // const processingServiceUrl = 'http://127.0.0.1:8084/plugin/image/resize';


      // 构建请求体
      const requestBody = {
        image_url: attachment.tmp_url,
        aspectRatio: selectedRatio,
        preserveMaxDimension: "auto",
        skipIfSameRatio: true, // 如果原图比例与目标比例相同，则不裁剪
        anchorPosition: selectedAnchor, // 添加锚点位置参数
      };

      // 输出请求信息以便调试
      console.log('Request URL:', processingServiceUrl);
      console.log('Request body:', JSON.stringify(requestBody));
      console.log('Attachment info:', JSON.stringify({
        name: attachment.name,
        type: attachment.type,
        size: attachment.size,
        tmp_url: attachment.tmp_url
      }));

      // 构建处理请求
      // 使用授权配置中的 API Key
      const processingResponse = await context.fetch(processingServiceUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }, 'api_key_auth'); // 使用授权ID引用授权配置

      // 输出请求头部信息以便调试
      console.log('Request headers:', JSON.stringify({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ******' // 使用授权配置中的 API Key
      }));

      if (!processingResponse.ok) {
        throw new Error(`Image processing failed: ${processingResponse.statusText}`);
      }

      const processedImageData = await processingResponse.json();

      // 检查响应格式，确保我们能正确获取处理后的图片URL
      console.log('Processed image data:', JSON.stringify(processedImageData));

      // 检查API返回的code是否为0（成功）
      if (processedImageData.code !== 0) {
        throw new Error(`Image processing failed: ${processedImageData.msg || 'Unknown error'}`);
      }

      // 检查是否原图已经是目标比例，无需裁剪
      const isOriginalRatio = processedImageData.data?.isOriginalRatio || false;

      // 如果原图已经是目标比例，直接使用原图 URL
      let processedImageUrl: string;
      if (isOriginalRatio) {
        console.log('Original image already has the target aspect ratio, skipping crop');
        processedImageUrl = attachment.tmp_url;
      } else {
        // 从响应中获取处理后的图片URL
        processedImageUrl = processedImageData.data?.result;
      }

      if (!processedImageUrl) {
        throw new Error('No processed image URL found in response');
      }

      // 4. 返回处理后的图片
      // 如果原图已经是目标比例，使用原始文件名，否则在文件名中添加比例信息
      const fileName = isOriginalRatio
        ? attachment.name
        : `${attachment.name.split('.')[0]}_${selectedRatio.replace(':', 'x')}.${attachment.name.split('.').pop()}`;

      return {
        code: FieldCode.Success,
        data: [
          {
            name: fileName,
            content: processedImageUrl, // 处理后的图片URL
            contentType: 'attachment/url',
          }
        ],
      };
    } catch (error) {
      console.error('Image processing error:', error);
      return {
        code: FieldCode.Error,
        msg: t('processingFailed'),
      };
    }
  },
});

export default basekit;