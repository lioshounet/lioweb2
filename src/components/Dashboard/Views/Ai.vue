<template>
    <div class="content">
        <div class="container-fluid">
            <div>
                <div class="row">
                    <h2>SD绘画和一些乱七八糟工具</h2>
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
        this.mainInfo1 = allInfo['AI']
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
  