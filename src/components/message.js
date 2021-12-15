import { ElNotification, ElMessageBox } from 'element-plus'

export default {
    success(title, message) {
        ElNotification({
            title,
            message,
            type: 'success',
        })
    },

    alert(title, message, comfirmMessage, callback) {
        ElMessageBox.alert(title, message, {
            confirmButtonText: comfirmMessage,
            callback,
        })
    }
}