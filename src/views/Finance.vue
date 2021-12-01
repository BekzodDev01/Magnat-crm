<template>
  <div class="mainContainer">
    <div class="finance">

      <div class="finance__header">
        <div class="heading">
          <span class="heading__icon" v-html="finance"></span>
          <div class="heading__text">
            <p class="mainHeading">Moliya</p>
            <p class="subHeading">
              Kirim va chiqimlar
            </p>
          </div>
        </div>
        <div class="searchBlock">
          <span class="notification" v-html="notification"></span>
          <div class="searchBlock__search">
            <span class="icon" v-html="search"></span>
            <input type="text" class="input" v-html="search" placeholder="Qidiruv..."/>
          </div>
        </div>
      </div>

      <div class="finance__mainInfo">
        <div class="header">
          <div class="title">
            <p @click="all=!all,  daily=false, weekly=false, monthly=false, monthly3=false, halfYear=false, annual=false"
               class="title__name" :class="{visited:all}">UMUMIY</p>
            <p @click="daily=!daily, all=false,weekly=false, monthly=false, monthly3=false, halfYear=false, annual=false"
               class="title__name" :class="{visited:daily}">KUNLIK</p>

            <p @click="weekly=!weekly, all=false, daily=false, monthly=false, monthly3=false, halfYear=false, annual=false"
               class="title__name" :class="{visited:weekly}">
              Haftalik</p>
            <p @click="monthly=!monthly, all=false, daily=false, weekly=false, monthly3=false, halfYear=false, annual=false"
               class="title__name" :class="{visited:monthly}">
              Oylik</p>

            <p @click="monthly3=!monthly3, all=false, daily=false, weekly=false, monthly=false, halfYear=false, annual=false"
               class="title__name" :class="{visited:monthly3}">
              3 Oylik</p>
            <p @click="halfYear=!halfYear, all=false, daily=false, weekly=false, monthly=false, monthly3=false, annual=false"
               class="title__name" :class="{visited:halfYear}">
              Yarim yillik </p>
            <p @click="annual=!annual, all=false, daily=false, weekly=false, monthly=false, monthly3=false, halfYear=false"
               class="title__name" :class="{visited:annual}">Bir yillik </p>
          </div>
        </div>
        <div class="finance__cards" v-if="all">
          <div class="infoCard">
            <div class="infoCard__name">
              <span class="icon" v-html="cardIcon[0]"></span>
              <p class="info">Kirim</p>
            </div>
            <div class="infoCard__values">
              <p class="value"><span>236,560,000</span> uzs</p>
            </div>
          </div>
          <div class="infoCard">
            <div class="infoCard__name">
              <span class="icon" v-html="cardIcon[1]"></span>
              <p class="info">Chiqim</p>
            </div>
            <div class="infoCard__values">
              <p class="value"><span>147,120,000</span> uzs</p>
            </div>
          </div>
          <div class="infoCard">
            <div class="infoCard__name">
              <span class="icon" v-html="cardIcon[2]"></span>
              <p class="info">Sof foyda</p>
            </div>
            <div class="infoCard__values">
              <p class="value"><span>89,440,000</span> uzs</p>
            </div>
          </div>
          <div class="infoCard">
            <div class="infoCard__name">
              <span class="icon" v-html="cardIcon[3]"></span>
              <p class="info">KOEFFITSIYENT</p>
            </div>
            <div class="infoCard__values">
              <p class="value"><span>37.8%</span></p>
            </div>
          </div>
        </div>
        <div class="selectionBlock">
          <div class="sort">
            <div class="dropDown">
              <p class="all">Barchasi</p>
              <span v-html="down" class="iconDown"></span>
            </div>
          </div>
          <div class="datePickerContainer">
            <div class="sort sort__datePicker">
              <VueDatePicker
                  v-model="financeDateFrom"
                  placeholder="23-avgust"
              />
            </div>
            <p class="from"> dan </p>
            <div class="sort sort__datePicker">
              <VueDatePicker
                  v-model="financeDateTo"
                  placeholder="30-avgust"
              />
            </div>
          </div>
        </div>
        <table>
          <thead>
          <tr class="finTableRow">
            <td class="finCol-1">Summa</td>
            <td class="finCol-2">Turi</td>
            <td class="finCol-3">Manbaa</td>
            <td class="finCol-4">Sane</td>
          </tr>
          </thead>
          <tr class="finTableRow finOdd">
            <td class="amountOfMoney finCol-1"><span>86,900,000</span>so’m</td>
            <td class="finCol-2"><span class="type type__income ">Kirim</span></td>
            <td class="source finCol-3">Sement sotildi</td>
            <td class="date finCol-4">2021-08-23</td>
          </tr>
          <tr class="finTableRow finEven">
            <td class="amountOfMoney finCol-1"><span>86,900,000</span>so’m</td>
            <td class="finCol-2"><span class="type type__expenditure">Chiqim</span></td>
            <td class="source finCol-3">Sement sotildi</td>
            <td class="date finCol-4">2021-08-23</td>
          </tr>
          <tr class="finTableRow finOdd">
            <td class="amountOfMoney finCol-1"><span>86,900,000</span>so’m</td>
            <td class="finCol-2"><span class="type type__income ">Kirim</span></td>
            <td class="source finCol-3">Sement sotildi</td>
            <td class="date finCol-4">2021-08-23</td>
          </tr>
          <tr class="finTableRow finEven">
            <td class="amountOfMoney finCol-1"><span>86,900,000</span>so’m</td>
            <td class="finCol-2"><span class="type type__expenditure">Chiqim</span></td>
            <td class="source finCol-3">Sement sotildi</td>
            <td class="date finCol-4">2021-08-23</td>
          </tr>
          <tr class="finTableRow finOdd">
            <td class="amountOfMoney finCol-1"><span>86,900,000</span>so’m</td>
            <td class="finCol-2"><span class="type type__income ">Kirim</span></td>
            <td class="source finCol-3">Sement sotildi</td>
            <td class="date finCol-4">2021-08-23</td>
          </tr>
        </table>
      </div>

    </div>

    <div class="rightSideNavbar">
      <div class="datePicker">
        <VueDatePicker
            v-model="date"
            inline
        />
      </div>
      <div class="progressiveInfo">
        <div class="progressiveInfo__header">
          <p class="debts">Qarzlar </p>
          <p class="overallDebt">Umumiy qarz: 322,150,000 so’m </p>

          <p class="debtsLeft">Qolgan qarzlar</p>
          <p class="debtsLeftAmount">123,322,000 <span>so’m</span></p>
        </div>
        <div class="progressiveInfo__progressCircle">
          <vue-circle
              :progress="68"
              :size="100"
              :reverse="false"
              line-cap="round"
              fill="#507BE8"
              empty-fill="#EDF0F5"
              :animation-start-value="0.0"
              :start-angle="180"
              insert-mode="append"
              :thickness="15"
              :show-percent="true"
              @vue-circle-progress="progress"
              @vue-circle-end="progress_end">
          </vue-circle>

        </div>


      </div>
      <div class="progressiveInfo">
        <div class="progressiveInfo__header">
          <p class="debts">Nasiyalar </p>
          <p class="overallDebt">Umumiy nasiya: 854,390,000 so’m </p>

          <p class="debtsLeft">Qolgan nasiyalar</p>
          <p class="debtsLeftAmount">355,890,000<span>so’m</span></p>
        </div>
        <div class="progressiveInfo__progressCircle">
          <vue-circle
              :progress="46"
              :size="100"
              :reverse="false"
              line-cap="round"
              fill="#507BE8"
              empty-fill="#EDF0F5"
              :animation-start-value="0.0"
              :start-angle="180"
              insert-mode="append"
              :thickness="15"
              :show-percent="true"
              @vue-circle-progress="progress"
              @vue-circle-end="progress_end">
          </vue-circle>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
import VueCircle from 'vue2-circle-progress'
export default {
  components: {
    VueCircle
  },
  data() {
    return {
      notification: `<svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0201 6.91C8.71009 6.91 6.02009 9.6 6.02009 12.91V15.8C6.02009 16.41 5.76009 17.34 5.45009 17.86L4.30009 19.77C3.59009 20.95 4.08009 22.26 5.38009 22.7C9.69009 24.14 14.3401 24.14 18.6501 22.7C19.8601 22.3 20.3901 20.87 19.7301 19.77L18.5801 17.86C18.2801 17.34 18.0201 16.41 18.0201 15.8V12.91C18.0201 9.61 15.3201 6.91 12.0201 6.91Z" stroke="#91A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        <path d="M13.8699 7.2C13.5599 7.11 13.2399 7.04 12.9099 7C11.9499 6.88 11.0299 6.95 10.1699 7.2C10.4599 6.46 11.1799 5.94 12.0199 5.94C12.8599 5.94 13.5799 6.46 13.8699 7.2Z" stroke="#91A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.02 23.06C15.02 24.71 13.67 26.06 12.02 26.06C11.2 26.06 10.44 25.72 9.90002 25.18C9.36002 24.64 9.02002 23.88 9.02002 23.06" stroke="#91A3B8" stroke-width="1.5" stroke-miterlimit="10"/>
        <rect x="19" width="5" height="5" rx="2.5" fill="#507BE8"/>
        </svg>`,
      search: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#91A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5 16.5L15 15" stroke="#91A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
      finance: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 14.25C10 15.2125 10.75 16 11.6625 16H13.5375C14.3375 16 14.9875 15.3125 14.9875 14.475C14.9875 13.5625 14.5875 13.2375 14 13.025L11 11.975C10.4 11.7625 10 11.4375 10 10.525C10 9.6875 10.65 9 11.45 9H13.325C14.25 9.0125 15 9.7875 15 10.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 16.0625V16.9875" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 8.0125V8.9875" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.4875 22.475C18.0034 22.475 22.475 18.0034 22.475 12.4875C22.475 6.97156 18.0034 2.5 12.4875 2.5C6.97156 2.5 2.5 6.97156 2.5 12.4875C2.5 18.0034 6.97156 22.475 12.4875 22.475Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.2266 24.85C17.3516 26.4375 19.1891 27.475 21.2891 27.475C24.7016 27.475 27.4766 24.7 27.4766 21.2875C27.4766 19.2125 26.4516 17.375 24.8891 16.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
      down: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#EDF1F7"/>
            <path d="M8.46997 10.74L12 14.26L15.53 10.74" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
      all: true,
      daily: false,
      weekly: false,
      monthly: false,
      monthly3: false,
      halfYear: false,
      annual: false,
      financeDateTo: null,
      financeDateFrom: null,
      cardIcon: [
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 7.5V16.5" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 3V7H21" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 2L17 7" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 7.5V16.5" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6V2H18" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 7L22 2" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 6V18" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 15L15 9" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.4945 14.5H14.5035" stroke="#181A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.49451 9.5H9.50349" stroke="#181A1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
      ],
      fill: {gradient: ["red", "green", "blue"]},
    }
  },


  methods: {
    progress(event, progress, stepValue) {
      console.log(stepValue);
    },
    progress_end() {
      console.log("Circle progress end");
    }
  }

}
</script>

