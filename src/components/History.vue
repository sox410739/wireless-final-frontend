<template>
    <el-card style="margin-bottom: 20px">
        <el-row>
            <el-col>
                <h3>輸出筆數</h3>
                <el-select v-model="limit" @change="getHistory()">
                    <el-option
                    v-for="option in limitOptions"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                    >
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
    </el-card>


    <el-card>
        <el-table :data="history">
            <el-table-column prop="sensor_UID" label="Sensor UID" width="180" />
            <el-table-column prop="longitude" label="經度" width="180" />
            <el-table-column prop="latitude" label="緯度" width="180" />
            <el-table-column prop="uploaded_at" label="更新時間" />
        </el-table>

    </el-card>
</template>


<script>
import axios from 'axios';


export default {
    data() {
        return {
            limit: 5,
            limitOptions: [
                {
                    value: 5,
                    label: '5',
                },
                {
                    value: 10,
                    label: '10',
                },
                {
                    value: 20,
                    label: '20',
                },
                {
                    value: 40,
                    label: '40',
                }
            ],
            history: ''
        }
    },

    async mounted() {
        await this.getHistory();
    },


    methods: {
        async getHistory() {
            let config = {
                method: 'GET',
                url: '/backend/sensors/history',
                params: {
                    limit: this.limit
                }
            }
            let response = await axios(config);
            this.history = response.data;
        }
    }
}


</script>