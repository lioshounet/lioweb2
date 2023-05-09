<template>
  <div class="content">
    <div class="container-fluid">
      <div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <stats-card>
              <i slot="icon" class="material-icons" style="color:#fff">content_copy</i>
              <div slot="title">
                <p class="category">Used Space</p>
                <h3 class="title">49/50
                  <small>GB</small>
                </h3>
              </div>
              <div slot="footer">
                <i class="material-icons">local_offer</i> tag开发中........
              </div>
            </stats-card>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <stats-card>
              <i slot="icon" class="material-icons" style="color:#fff">store</i>
              <div slot="title">
                <p class="category">Revenue</p>
                <h3 class="title">$34,245</h3>
              </div>
              <div slot="footer">
                <i class="material-icons">local_offer</i> tag开发中........
              </div>
            </stats-card>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <stats-card color="red">
              <i slot="icon" class="material-icons" style="color:#fff">info_outline</i>
              <div slot="title">
                <p class="category">Fixed Issues</p>
                <h3 class="title">75</h3>
              </div>
              <div slot="footer">
                <i class="material-icons">local_offer</i> tag开发中........
              </div>
            </stats-card>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6">
            <stats-card color="blue">
              <i slot="icon" class="fa fa-twitter" style="color:#fff"></i>
              <div slot="title">
                <p class="category">Followers</p>
                <h3 class="title">+245</h3>
              </div>
              <div slot="footer">
                <i class="material-icons">local_offer</i> tag开发中........
              </div>
            </stats-card>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <chart-card id="dailySales" :chart-data="dailySalesChart.data" :chart-options="dailySalesChart.options">
              <div slot="title">
                <h4 class="title">Daily Sales</h4>
                <p class="category"><span class="text-success"><i class="fa fa-long-arrow-up"></i> 55% </span>
                  increase in today sales.</p>
              </div>
              <span slot="footer">
                <i class="material-icons">access_time</i> updated 4 minutes ago
              </span>
            </chart-card>
          </div>

          <div class="col-md-4">
            <chart-card color="orange" chart-type="Bar" id="emailSubscriptions" :chart-data="emailSubscriptionsChart.data"
              :chart-options="emailSubscriptionsChart.options"
              :responsive-options="emailSubscriptionsChart.responsiveOptions">
              <div slot="title">
                <h4 class="title">Email Subscriptions</h4>
                <p class="category">Last Campaign Performance</p>
              </div>
              <span slot="footer">
                <i class="material-icons">access_time</i> campaign sent 2 days ago
              </span>
            </chart-card>
          </div>

          <div class="col-md-4">
            <chart-card color="red" id="completedTasks" :chart-data="completedTasksChart.data"
              :chart-options="completedTasksChart.options">
              <div slot="title">
                <h4 class="title">Completed Tasks</h4>
                <p class="category">Last Campaign Performance</p>
              </div>
              <span slot="footer">
                <i class="material-icons">access_time</i> campaign sent 2 days ago
              </span>
            </chart-card>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-12">
          </div>

          <div class="col-md-12">
            <div class="card">
              <div class="card-header" data-background-color="orange">
                <h4 class="title">Employees Stats</h4>
                <p class="category">New employees on 15th September, 2016</p>
              </div>
              <div class="card-content table-responsive">
                <table class="table table-hover">
                  <thead class="text-warning">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Country</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
      }

    }
  },
  mounted() {
  },
  methods: {
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
<style>
.ss {
  background-color: #fff;
}
</style>
