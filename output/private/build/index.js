"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const { t } = block_basekit_server_api_1.field;
// 添加图片处理服务域名到白名单
// 添加本地图片处理服务域名
block_basekit_server_api_1.basekit.addDomainList(['feishu.cn', '127.0.0.1', 'aihubmax.com']);
// 添加授权配置
block_basekit_server_api_1.basekit.addField({
    // 添加字段配置选项
    options: {
        disableAutoUpdate: false, // 关闭自动更新
    },
    // 定义授权配置
    authorizations: [
        {
            id: 'api_key_auth', // 授权ID，用于在execute函数中引用
            type: block_basekit_server_api_1.AuthorizationType.HeaderBearerToken, // 授权类型，使用Bearer Token模式
            label: t('apiKey'),
            instructionsUrl: 'https://nmqccclky7.feishu.cn/wiki/IyXNwS3MYigcp2kp7wucZR8MnuT', // 帮助链接，告诉用户如何获取API Key
            platform: 'aihubmax', // 平台类型
            icon: {
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
                'description': '按比例裁剪图片并保留制定边',
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
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.Attachment],
                placeholder: t('description'),
            },
            validator: {
                required: true,
            },
        },
        {
            key: 'customAspectRatio',
            label: t('customRatioInput'),
            component: block_basekit_server_api_1.FieldComponent.Input,
            props: {
                placeholder: t('customRatioPlaceholder'),
            },
        },
        {
            key: 'presetAspectRatio',
            label: t('presetRatio'),
            component: block_basekit_server_api_1.FieldComponent.SingleSelect,
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
            component: block_basekit_server_api_1.FieldComponent.SingleSelect,
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
        type: block_basekit_server_api_1.FieldType.Attachment,
    },
    // 执行函数
    execute: async (formItemParams, context) => {
        const { imageField, customAspectRatio, presetAspectRatio, anchorPosition } = formItemParams;
        const attachment = imageField?.[0];
        // 获取用户选择的裁剪比例
        let selectedRatio;
        // 优先使用自定义比例，如果有的话
        if (customAspectRatio) {
            // 处理自定义比例，将中文冒号转换为英文冒号
            selectedRatio = customAspectRatio.replace('：', ':');
            // 验证比例格式是否正确
            if (!selectedRatio.match(/^\d+:\d+$/)) {
                return {
                    code: block_basekit_server_api_1.FieldCode.Error,
                    msg: t('invalidRatio'),
                };
            }
        }
        else {
            // 如果没有自定义比例，则使用预设比例
            selectedRatio = presetAspectRatio?.value || '9:16';
        }
        // 获取用户选择的锚点位置
        const selectedAnchor = anchorPosition?.value || 'center';
        if (!attachment || !attachment.tmp_url) {
            return {
                code: block_basekit_server_api_1.FieldCode.Error,
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
            let processedImageUrl;
            if (isOriginalRatio) {
                console.log('Original image already has the target aspect ratio, skipping crop');
                processedImageUrl = attachment.tmp_url;
            }
            else {
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
                code: block_basekit_server_api_1.FieldCode.Success,
                data: [
                    {
                        name: fileName,
                        content: processedImageUrl, // 处理后的图片URL
                        contentType: 'attachment/url',
                    }
                ],
            };
        }
        catch (error) {
            console.error('Image processing error:', error);
            return {
                code: block_basekit_server_api_1.FieldCode.Error,
                msg: t('processingFailed'),
            };
        }
    },
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBK0g7QUFDL0gsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLGdDQUFLLENBQUM7QUFFcEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixrQ0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUVoRSxTQUFTO0FBQ1Qsa0NBQU8sQ0FBQyxRQUFRLENBQUM7SUFDZixXQUFXO0lBQ1gsT0FBTyxFQUFFO1FBQ1AsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFNBQVM7S0FDcEM7SUFDRCxTQUFTO0lBQ1QsY0FBYyxFQUFFO1FBQ2Q7WUFDRSxFQUFFLEVBQUUsY0FBYyxFQUFFLHVCQUF1QjtZQUMzQyxJQUFJLEVBQUUsNENBQWlCLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCO1lBQ25FLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2xCLGVBQWUsRUFBRSwrREFBK0QsRUFBRSx1QkFBdUI7WUFDekcsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPO1lBQzdCLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsMkVBQTJFO2dCQUNsRixJQUFJLEVBQUUsZ0ZBQWdGO2FBQ3ZGO1NBQ0Y7S0FDRjtJQUNELGdCQUFnQjtJQUNoQixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWSxFQUFFLE1BQU07Z0JBQ3BCLGFBQWEsRUFBRSxlQUFlO2dCQUM5QixrQkFBa0IsRUFBRSxRQUFRO2dCQUM1QixXQUFXLEVBQUUsUUFBUTtnQkFDckIsc0JBQXNCLEVBQUUsY0FBYztnQkFDdEMsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixZQUFZLEVBQUUsTUFBTTtnQkFDcEIsYUFBYSxFQUFF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