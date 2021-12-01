<template>
  <div class="homePage">
  <div class="home">
    <div class="home__cards">
      <div class="infoCard">
        <div class="infoCard__name">
          <span class="icon" v-html="cardIcon[0]"></span>
          <p class="info">Mavjud Sement</p>
        </div>
        <div class="infoCard__values">
          <p class="value"><span>263</span> tonna</p>
        </div>
      </div>
      <div class="infoCard">
        <div class="infoCard__name">
          <span class="icon" v-html="cardIcon[1]"></span>
          <p class="info">Mavjud Qop</p>
        </div>
        <div class="infoCard__values">
          <p class="value"><span>172</span> oddiy <span class="seperator">|</span><span>204</span> convert</p>
        </div>
      </div>
      <div class="infoCard">
        <div class="infoCard__name">
          <span class="icon" v-html="cardIcon[2]"></span>
          <p class="info">Qarzdorlik</p>
        </div>
        <div class="infoCard__values">
          <p class="value"><span>26 mln</span>uzs </p>
        </div>
      </div>
      <div class="infoCard">
        <div class="infoCard__name">
          <span class="icon" v-html="cardIcon[3]"></span>
          <p class="info">Nasiya</p>
        </div>
        <div class="infoCard__values">
          <p class="value"><span>54.5 mln</span> uzs</p>
        </div>
      </div>
    </div>

    <div class="mainInfo">
      <div class="mainInfo__block mainInfo__sales">
        <div id="chart">
          <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
      <div class="mainInfo__block mainInfo__debts">
        <div class="debtsHeading">
          <p class="debtsHeading__text">Qarzdorlar </p>
          <span class="arrowIcon" v-html="arrow"></span>
        </div>
        <div class="debtsTable">
          <div class="debtsTable__headers">
            <p class="tableRow-1">Ism</p>
            <p class="tableRow-2">Summa</p>
            <p class="tableRow-3">Sana</p>
          </div>
          <div class="debtsTable__table">
            <div class="debtsTable__table--row">
              <div class="tableRow-1">
                <span class="avatar avatar--1">H</span>
                <p class="name">Huzayfa Baxromiy</p>
              </div>
              <p class="amount tableRow-2"><span>12.5</span> mln</p>
              <p class="sana tableRow-3">2021-08-23</p>
            </div>
            <div class="debtsTable__table--row">
              <div class="tableRow-1">
                <span class="avatar avatar--2">A</span>
                <p class="name">Abror Hoshimov</p>
              </div>
              <p class="amount tableRow-2"><span>500</span> ming</p>
              <p class="sana tableRow-3">2021-09-11</p>
            </div>
            <div class="debtsTable__table--row">
              <div class="tableRow-1">
                <span class="avatar avatar--3">M</span>
                <p class="name">Muhammadaziz N.</p>
              </div>
              <p class="amount tableRow-2"><span>1.9</span> mln</p>
              <p class="sana tableRow-3">2021-11-29</p>
            </div>
            <div class="debtsTable__table--row">
              <div class="tableRow-1">
                <span class="avatar avatar--4">A</span>
                <p class="name">Abu Ubayda ibn S.</p>
              </div>
              <p class="amount tableRow-2"><span>1.47</span> mln</p>
              <p class="sana tableRow-3">2021-11-31</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="incomeExpense">

      <div class="incomeExpense__header">
        <p class="heading">Kirim chqimlar </p>
        <div class="sort">
          <p class="order">Tartib: </p>
          <div class="dropDown">
            <p class="all">Barchasi</p>
            <span v-html="down" class="iconDown"></span>
          </div>
          <span class="arrowIcon" v-html="arrow"></span>
        </div>
      </div>

      <div class="incomeExpense__info">
        <div class="staff odd">
          <p class="staff__name">
            <span class="avatar avatar--1">H</span> Huzayfa Baxromiy
          </p>
          <p class="product">Sement: 23312</p>
          <p class="amount">12 t</p>
          <div class="type">
            <p class="type__badge type__badge--income">Kirim</p>
          </div>

          <p class="moneyAmount">12.5 <span>mln</span></p>
          <p class="infoDate"> 2021-08-23</p>
        </div>

        <div class="staff even">
          <p class="staff__name">
            <span class="avatar avatar--2">A</span> Abror Hoshimov
          </p>
          <p class="product">Sement: 22233</p>
          <p class="amount">50 t</p>
          <div class="type">
            <p class="type__badge type__badge--expense">Chiqim</p>
          </div>

          <p class="moneyAmount">500 <span>ming</span></p>
          <p class="infoDate"> 2021-09-11</p>
        </div>

        <div class="staff odd">
          <p class="staff__name">
            <span class="avatar avatar--3">M</span> Muhammadaziz N.
          </p>
          <p class="product"> Sement: 22419</p>
          <p class="amount">900 kg</p>
          <div class="type">
            <p class="type__badge type__badge--income">Kirim</p>
          </div>

          <p class="moneyAmount">1,9 <span>mln</span></p>
          <p class="infoDate"> 2021-11-29</p>
        </div>

        <div class="staff even">
          <p class="staff__name">
            <span class="avatar avatar--4">A</span> Abu Ubayda ibn S.
          </p>
          <p class="product">Qop: oddiy</p>
          <p class="amount">120 ta</p>
          <div class="type">
            <p class="type__badge type__badge--expense">Chiqim</p>
          </div>

          <p class="moneyAmount">1,47 <span>mln</span></p>
          <p class="infoDate"> 2021-11-31</p>
        </div>
      </div>

    </div>
  </div>

    <div class="rightSideNavbar">
      <div class="datePicker">
        <VueDatePicker
            v-model="date"
            inline
        />
      </div>
      <div class="premiumClients">
        <div class="premiumClients__header">
          <p class="heading">
            Premium mijozlar
          </p>
          <span class="arrowIcon" v-html="arrow"></span>
        </div>
        <div class="premiumClients__list">
          <div class="client odd">
            <div class="client__name">
              <p class="name">
                <span class="avatar avatar--1">H</span> Huzayfa Baxromiy
              </p>
            </div>
            <p class="client__numberOfOrders">4312</p>
          </div>
          <div class="client even">
            <div class="client__name">
              <p class="name">
                <span class="avatar avatar--2">A</span> Abror Xoshimjonov
              </p>
            </div>
            <p class="client__numberOfOrders">8124</p>
          </div>
          <div class="client odd">
            <div class="client__name">
              <p class="name">
                <span class="avatar avatar--1">B</span> Behruz Abdullayev
              </p>
            </div>
            <p class="client__numberOfOrders">9844</p>
          </div>
          <div class="client even">
            <div class="client__name">
              <p class="name">
                <span class="avatar avatar--2">M</span> Muhammadaziz N.
              </p>
            </div>
            <p class="client__numberOfOrders">7894</p>
          </div>
          <div class="client odd">
            <div class="client__name">
              <p class="name">
                <span class="avatar avatar--1">A</span> Abu Ubayda ibn Zubayr
              </p>
            </div>
            <p class="client__numberOfOrders">5847</p>
          </div>
          <div class="client even">
            <div class="client__name">
              <p class="name">
                <span class="avatar avatar--2">A</span>Alibek Azimov.
              </p>
            </div>
            <p class="client__numberOfOrders">784</p>
          </div>
        </div>


      </div>
    </div>
  </div>

</template>

<script>
// import ApexCharts from 'apexcharts'
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'home',

  data() {
    return {
      date: new Date(),
      cardIcon: [
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.77011 15.56L7.23011 19.02C9.66011 21.45 10.4901 21.41 12.8901 19.02L18.4601 13.45C20.4001 11.51 20.8901 10.22 18.4601 7.78999L15.0001 4.32999C12.4101 1.74 11.2801 2.38999 9.34011 4.32999L3.77011 9.89999C1.38011 12.3 1.18011 12.97 3.77011 15.56Z" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.2 16.79L18.54 17.88C17.61 19.43 18.33 20.7 20.14 20.7C21.95 20.7 22.67 19.43 21.74 17.88L21.08 16.79C20.56 15.93 19.71 15.93 19.2 16.79Z" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12.24C7.56 10.73 13.42 10.68 19 12.11L19.5 12.24" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.16992 7.44L11.9999 12.55L20.7699 7.47" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 21.61V12.54" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.92989 2.48001L4.58989 5.44001C3.37989 6.11001 2.38989 7.79001 2.38989 9.17001V14.82C2.38989 16.2 3.37989 17.88 4.58989 18.55L9.92989 21.52C11.0699 22.15 12.9399 22.15 14.0799 21.52L19.4199 18.55C20.6299 17.88 21.6199 16.2 21.6199 14.82V9.17001C21.6199 7.79001 20.6299 6.11001 19.4199 5.44001L14.0799 2.47001C12.9299 1.84001 11.0699 1.84001 9.92989 2.48001Z" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.18 10.16 8.49001 10.96 8.49001H12.84C13.76 8.49001 14.51 9.27001 14.51 10.24" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 7.5V16.5" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 6V2H18" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 7L22 2" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.18 10.16 8.49001 10.96 8.49001H12.84C13.76 8.49001 14.51 9.27001 14.51 10.24" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M12 7.5V16.5" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M17 3V7H21" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M22 2L17 7" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               `],
      arrow: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4299 5.92999L20.4999 12L14.4299 18.07" stroke="#181A1D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.5 12H20.33" stroke="#181A1D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
      down: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#EDF1F7"/>
            <path d="M8.46997 10.74L12 14.26L15.53 10.74" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },


    }
  },
  components: {
    apexchart: VueApexCharts,
  },
//
//

}
</script>
