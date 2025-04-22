"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const { t } = block_basekit_server_api_1.field;
// 添加图片处理服务域名到白名单
// 添加本地图片处理服务域名
block_basekit_server_api_1.basekit.addDomainList(['feishu.cn', '127.0.0.1', 'aihubmax.com']);
// 添加授权配置
block_basekit_server_api_1.basekit.addField({
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
                'description': '裁剪图片并保留最大纵向尺寸',
                'processingFailed': '图片处理失败',
                'ratioType': '裁剪比例类型',
                'ratioTypeDescription': '选择预设比例或自定义比例',
                'presetRatio': '预设比例',
                'customRatio': '自定义比例',
                'widthRatio': '宽度比例',
                'heightRatio': '高度比例',
                'invalidRatio': '无效的比例值',
                'square': '正方形 (1:1)',
                'portrait': '纵向 (9:16)',
                'landscape': '横向 (16:9)',
                'classic': '经典 (4:3)',
                'widescreen': '宽屏 (21:9)',
                'apiKey': 'API Key',
                'apiKeyDescription': '请输入图片处理服务的 API Key',
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
                'invalidRatio': 'Invalid ratio value',
                'square': 'Square (1:1)',
                'portrait': 'Portrait (9:16)',
                'landscape': 'Landscape (16:9)',
                'classic': 'Classic (4:3)',
                'widescreen': 'Widescreen (21:9)',
                'apiKey': 'API Key',
                'apiKeyDescription': 'Enter the API Key for the image processing service',
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
                'invalidRatio': '無効な比率値',
                'square': '正方形 (1:1)',
                'portrait': 'ポートレート (9:16)',
                'landscape': 'ランドスケープ (16:9)',
                'classic': 'クラシック (4:3)',
                'widescreen': 'ワイドスクリーン (21:9)',
                'apiKey': 'APIキー',
                'apiKeyDescription': '画像処理サービスのAPIキーを入力してください',
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
            key: 'aspectRatio',
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
    ],
    // 定义捷径的返回结果类型为附件字段
    resultType: {
        type: block_basekit_server_api_1.FieldType.Attachment,
    },
    // 执行函数
    execute: async (formItemParams, context) => {
        const { imageField, aspectRatio } = formItemParams;
        const attachment = imageField?.[0];
        // 获取用户选择的裁剪比例
        const selectedRatio = aspectRatio?.value || '9:16';
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
            // const processingServiceUrl = 'http://127.0.0.1:8000/plugin/image/resize';
            // 构建请求体
            const requestBody = {
                image_url: attachment.tmp_url,
                aspectRatio: selectedRatio,
                preserveMaxDimension: 'height',
                skipIfSameRatio: true, // 如果原图比例与目标比例相同，则不裁剪
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
            // 检查是否原图已经是目标比例，无需裁剪
            const isOriginalRatio = processedImageData.data?.isOriginalRatio || processedImageData.isOriginalRatio || false;
            // 如果原图已经是目标比例，直接使用原图 URL
            let processedImageUrl;
            if (isOriginalRatio) {
                console.log('Original image already has the target aspect ratio, skipping crop');
                processedImageUrl = attachment.tmp_url;
            }
            else {
                // 从响应中获取处理后的图片URL
                processedImageUrl = processedImageData.data?.result || processedImageData.url || processedImageData.imageUrl || processedImageData.processedUrl;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBK0g7QUFDL0gsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLGdDQUFLLENBQUM7QUFFcEIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixrQ0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUVoRSxTQUFTO0FBQ1Qsa0NBQU8sQ0FBQyxRQUFRLENBQUM7SUFDZixTQUFTO0lBQ1QsY0FBYyxFQUFFO1FBQ2Q7WUFDRSxFQUFFLEVBQUUsY0FBYyxFQUFFLHVCQUF1QjtZQUMzQyxJQUFJLEVBQUUsNENBQWlCLENBQUMsaUJBQWlCLEVBQUUsd0JBQXdCO1lBQ25FLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ2xCLGVBQWUsRUFBRSwrREFBK0QsRUFBRSx1QkFBdUI7WUFDekcsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPO1lBQzdCLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsMkVBQTJFO2dCQUNsRixJQUFJLEVBQUUsZ0ZBQWdGO2FBQ3ZGO1NBQ0Y7S0FDRjtJQUNELGdCQUFnQjtJQUNoQixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUU7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWSxFQUFFLE1BQU07Z0JBQ3BCLGFBQWEsRUFBRSxlQUFlO2dCQUM5QixrQkFBa0IsRUFBRSxRQUFRO2dCQUM1QixXQUFXLEVBQUUsUUFBUTtnQkFDckIsc0JBQXNCLEVBQUUsY0FBYztnQkFDdEMsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixZQUFZLEVBQUUsTUFBTTtnQkFDcEIsYUFBYSxFQUFFLE1BQU07Z0JBQ3JCLGNBQWMsRUFBRSxRQUFRO2dCQUN4QixRQUFRLEVBQUUsV0FBVztnQkFDckIsVUFBVSxF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