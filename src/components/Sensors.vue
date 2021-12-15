<template>
    <el-row justify="center">

        <el-card
        class="card"
        shadow="hover" 
        v-for="sensor of sensors"
        :key="sensor.UID">
            
            <el-form @click.stop="">
                <el-button type="success" circle>
                    <el-icon><document-checked /></el-icon>
                </el-button>
                <el-button type="danger" circle @click="deleteSensor(sensor.UID)">
                    <el-icon><close-bold /></el-icon>
                </el-button>

                <el-form-item>
                    <el-input v-model="sensor.UID" disabled>
                        <template #prepend>UID</template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="sensor.name" disabled>
                        <template #prepend>名稱</template>
                    </el-input>
                </el-form-item>
            </el-form>
        </el-card>

        <el-card class="card" 
        :body-style="newSensor.style"
        shadow="hover">
            <el-form v-if="newSensor.inputVisible">
                <el-button type="success" circle @click="addNewSensor()">
                    <el-icon><document-checked /></el-icon>
                </el-button>
                <el-button type="danger" circle @click="newSensorCancel()">
                    <el-icon><close-bold /></el-icon>
                </el-button>


                <el-form-item>
                    <el-input v-model="newSensor.inputUID">
                        <template #prepend>UID</template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="newSensor.inputName">
                        <template #prepend>名稱</template>
                    </el-input>
                </el-form-item>
            </el-form>

            <el-col id="new-sensor" v-else @click="newSensorOnClicked()">
                <el-icon :size="newSensor.iconSize">
                    <CirclePlusFilled/>
                </el-icon>
                <br>
                <strong>新增感測器</strong>
            </el-col>
        </el-card>
    </el-row>
</template>


<script>
import axios from 'axios';
import Message from './message.js';

export default {
    name: 'Sensor',
    data() {
        return {
            newSensor: {
                style: "display: flex;flex-direction: column;justify-content: center;align-items: center;height: 80%;",
                inputUID: '',
                inputName: '',
                inputVisible: false,
                iconSize: 40
            },
            sensors: ''
        }
    },

    async mounted() {
        await this.getSensors();
    },


    methods: {
        async getSensors() {
            let response = await axios.get('/backend/sensors');
            this.sensors = response.data;
        },

        newSensorOnClicked() {
            this.newSensor.inputVisible = true;
        },

        newSensorCancel() {
            this.newSensor.inputVisible = false;
        },

        async addNewSensor() {
            if (!this.newSensor.inputUID) {
                Message.alert('', '必須填入UID', 'OK');
                return;
            }

            let config = {
                method: 'POST',
                url: '/backend/sensor-sign-up',
                data: {
                    UID: this.newSensor.inputUID,
                    name: this.newSensor.inputName,
                }
            }

            try {
                let response = await axios(config);
                Message.success('新增成功', response.data);
                this.newSensor.inputVisible = false;
                this.newSensor.inputUID = '';
                this.newSensor.inputName = '';
                await this.getSensors();

            } catch (error) {
                console.log(error);
                Message.alert('新增失敗', '', 'OK');
            }
        },

        async deleteSensor(UID) {
            let config = {
                method: 'DELETE',
                url: '/backend/sensors/' + UID,
            }
            
            try {
                let response = await axios(config);
                Message.success('刪除成功', response.data);
                await this.getSensors();

            } catch (error) {
                console.log(error);
                Message.alert('刪除失敗', '', 'OK');
            }
        }
    }
}
</script>



<style scoped>
.card{
    width: 350px;
    height: 160px;
    margin: 10px;

    cursor: pointer;
}


#new-sensor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80%;
}

.el-button {
    float: right;
    margin-left: 10px;
}

</style>