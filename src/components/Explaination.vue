<template>
    <el-card>
        <el-row>
            <ul style="font-size:20px;">
                <li>每個 Sensor 在上傳資料前必須要先註冊，不然會上傳失敗。註冊可以到感測器列表註冊</li>
                <li>可以到感測紀錄檢查經緯度有沒有上傳成功</li>
                <li>建議使用 <strong>Python Requests</strong> 套件</li>
            </ul>
        </el-row>
    </el-card>
    <el-card>
        <template #header>
            <div class="apiHeader">
                <el-button type="success" plain>GET</el-button>
                <div class="api">https://cockroach.idv.tw/wireless-final-backend/apis/test</div>
            </div>
        </template>

        <el-descriptions
            class="margin-top"
            title="說明"
            :column="3"
            :size="size"
        >
            <el-descriptions-item label="">測試用，成功會回傳 ok。</el-descriptions-item>
        </el-descriptions>
    </el-card>


    <el-card>
        <template #header>
        <div class="apiHeader">
            <el-button type="primary" plain>POST</el-button>
            <div class="api">https://cockroach.idv.tw/wireless-final-backend/apis/sensor-sign-up</div>
        </div>
        </template>

        <el-descriptions
            class="margin-top"
            title="說明"
            :column="3"
        >
            <el-descriptions-item label="">註冊感測器，每個感測器都有 UID 跟 name，要先註冊才可以使用喔~</el-descriptions-item>
        </el-descriptions>

        <el-descriptions
            class="margin-top"
            title="Data"
            :column="2"
            border
        >
            <el-descriptions-item label="UID">必要欄位，且不同感測器的 UID 不同，格式不限</el-descriptions-item>
            <el-descriptions-item label="name">非必要，單純為感測器取名字</el-descriptions-item>
        </el-descriptions>
    </el-card>


    <el-card>
        <template #header>
        <div class="apiHeader">
            <el-button type="primary" plain>POST</el-button>
            <div class="api">https://cockroach.idv.tw/wireless-final-backend/apis/sensors/:sensorUID/gps-data</div>
        </div>
        </template>

        <el-descriptions
            class="margin-top"
            title="說明"
            :column="3"
        >
            <el-descriptions-item label="">上傳定位資訊，上傳的格式為度(。)</el-descriptions-item>
        </el-descriptions>
        <el-descriptions
            class="margin-top"
            :column="3"
        >
            <el-descriptions-item label="">GPS模組測出來是度分格式，要把它轉成度(就是把分的部分除以60)。</el-descriptions-item>
        </el-descriptions>
        <el-descriptions
            class="margin-top"
            :column="3"
        >
            <el-descriptions-item label="">東經為正，西經為負，北緯為正，南緯為負。</el-descriptions-item>
        </el-descriptions>

        <el-descriptions
            class="margin-top"
            title="Data"
            :column="3"
            border
        >
            <el-descriptions-item label="longitude">經度，格式為浮點數字串</el-descriptions-item>
            <el-descriptions-item label="latitude">緯度，格式為浮點數字串</el-descriptions-item>
            <el-descriptions-item label="battery">感測器電量，0-1 之間的小數</el-descriptions-item>
        </el-descriptions>
    </el-card>



    <el-card>
        <template #header>
        <div class="apiHeader">
            <el-button type="success" plain>GET</el-button>
            <div class="api">https://cockroach.idv.tw/wireless-final-backend/apis/sensors/:sensorUID/battery</div>
        </div>
        </template>

        <el-descriptions
            class="margin-top"
            title="說明"
            :column="3"
        >
            <el-descriptions-item label="">獲得該感測器上一次上傳時的電量</el-descriptions-item>
        </el-descriptions>

        <el-descriptions
            class="margin-top"
            title="Response Example"
            :column="3"
        >
            <el-descriptions-item label="">
            <code>
                {
                    "battery": "0.1"
                }
            </code>
            </el-descriptions-item>
        </el-descriptions>
    </el-card>


    <el-card>
        <template #header>
        <div class="apiHeader">
            <el-button type="success" plain>GET</el-button>
            <div class="api">https://cockroach.idv.tw/wireless-final-backend/apis/sensors/:sensorUID/distance</div>
        </div>
        </template>

        <el-descriptions
            class="margin-top"
            title="說明"
            :column="3"
        >
            <el-descriptions-item label="">獲得你與感測器之間距離，以及其時間資訊</el-descriptions-item>
        </el-descriptions>

        <el-descriptions
            class="margin-top"
            title="Params"
            :column="3"
            border
        >
            <el-descriptions-item label="your_longitude">你的經度</el-descriptions-item>
            <el-descriptions-item label="your_latitude">你的緯度</el-descriptions-item>
        </el-descriptions>

        <el-descriptions
            class="margin-top"
            title="Response Example"
            :column="3"
        >
            <el-descriptions-item label="">
            <code>
                {
                    "your_address": "327台灣桃園市新屋區觀海路一段742號",
                    "sensor_address": "424台灣台中市和平區710線林道",
                    "distance": {
                        "text": "175 公里",
                        "value": 174937
                    },
                    "duration": {
                        "text": "1 天 13 小時",
                        "value": 133635
                    },
                    "last_update": "2天前"
                }
            </code>
            </el-descriptions-item>
        </el-descriptions>
    </el-card>
</template>



<style scoped>
.el-card {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
}

.api {
    margin-left: 8px;
    width: 100%;
}

.apiHeader {
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
}
</style>