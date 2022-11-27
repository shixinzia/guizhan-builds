/**
 * 有关 Cloudflare R2 的所有方法
 * @author ybw0014
 */

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const S3 = new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    }
})

module.exports = {
    uploadToR2
}

/**
 * 获取上传路径地址
 * @param filePath 上传路径
 * @returns {Promise<string>} 包含路径的Promise
 */
async function getUploadUrl (filePath) {
    return await getSignedUrl(
        S3,
        new PutObjectCommand({ Bucket: process.env.R2_BUCKET, Key: filePath }),
        { expiresIn: 3600 }
    )
}

function uploadToR2 (task) {
    return new Promise((resolve, _reject) => {
        getUploadUrl().then()
    })
}
