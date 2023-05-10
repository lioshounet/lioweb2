<template>
    <div class="content">
        <div class="container-fluid">
            <div>
                <div class="row">
                    <h2>设计类资源</h2>
                    <div v-for="itme in mainInfo1">
                        <div class="col-lg-3 col-md-6 col-sm-6" @click="jumpLike(itme.linke)">
                            <stats-card>
                                <img slot="icon" :src="`https://moral-scarlet-fox.faviconkit.com/${itme.linke}/200`" alt=""
                                    class="iconClass">
                                <div slot="title">
                                    <p class="category" style="color: #fff;">{{ itme.con }}</p>
                                    <h3 class="title">{{ itme.name }}
                                    </h3>
                                </div>
                                <div slot="footer">
                                    <i class="material-icons">local_offer</i> tag开发中........
                                </div>
                            </stats-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import StatsCard from 'components/UIComponents/Cards/StatsCard.vue'
import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
import allInfo from 'components/Info/allInfo.json'
export default {
    components: {
        StatsCard,
        ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data() {
        return {
            dailySalesChart: {
                data: {
                    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                    series: [
                        [12, 17, 7, 17, 23, 18, 38]
                    ]
                },
                options: {
                    lineSmooth: this.$Chartist.Interpolation.cardinal({
                        tension: 0
                    }),
                    low: 0,
                    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                    chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
                }
            },
            completedTasksChart: {
                data: {
                    labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
                    series: [
                        [230, 750, 450, 300, 280, 240, 200, 190]
                    ]
                },
                options: {
                    lineSmooth: this.$Chartist.Interpolation.cardinal({
                        tension: 0
                    }),
                    low: 0,
                    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                    chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
                }
            },
            emailSubscriptionsChart: {
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    series: [
                        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

                    ]
                },
                options: {
                    axisX: {
                        showGrid: false
                    },
                    low: 0,
                    high: 1000,
                    chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
                },
                responsiveOptions: [
                    ['screen and (max-width: 640px)', {
                        seriesBarDistance: 5,
                        axisX: {
                            labelInterpolationFnc: (value) => value[0]
                        }
                    }]
                ]
            },

            linkData: [
                {
                    name: "bilibili",
                    linke: "www.bilibili.com",
                    con: "在线美剧"
                },
                {
                    name: "bilibili",
                    linke: "bilibili.com",
                    con: "在线美剧"
                }
            ],
            mainInfo1: [],
            mainInfo2: []
        }
    },
    mounted() {
        this.mainInfo1 = allInfo['see']
    },
    methods: {
        jumpLike(linke) {
            let path = window.location.protocol + '//' + linke
            window.open(path)

        },
        colorR() {
            var rObj = {
                "lio-wh": "#ffffff",
                "lio-bl": "#355070",
                "lio-gr": "#6d597a",
                "lio-r1": "#b56576",
                "lio-wh": "#e56b6f",
                "lio-or": "#eaac8b",
            }
            var rArr = ["#ffffff",
                "#355070",
                "#6d597a",
                "#b56576",
                "#e56b6f",
                "#eaac8b",]

            console.log(rArr[Math.floor(Math.random() * rArr.length)]);
            return rArr[Math.floor(Math.random() * rArr.length)];
        }
    }

}

</script>
<style lang="scss" scoped>
.stats-card {

    // background-color: #fff;
    // .iconClass {
    //   width: 61px;
    //   height: 61px;
    // }
}
</style>
  