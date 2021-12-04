<template>
  <div class="incomes">
    <div class="incomes__header">
      <div class="heading">
        <span class="heading__icon" v-html="incomeIcon"></span>
        <div class="heading__text">
          <p class="mainHeading">Kiritmalar</p>
          <p class="subHeading">Sement va qop kiritmalar arxivi </p>
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
    <div class="incomes__tableOfInfo">
      <div class="header">
        <div class="title">
          <p @click="sement=!sement, qop=false" class="title__name" :class="{visited:sement}">Sement</p>
          <p @click="qop=!qop, sement=false " class="title__name" :class="{visited:qop}">Qop</p>
        </div>
        <div class="selectionBlock">
          <div class="sort">
            <p class="order">Tartib: </p>
            <div class="dropDown">
              <p class="all">Barchasi</p>
              <span v-html="down" class="iconDown"></span>
            </div>
          </div>
          <div class="sort sort__datePicker">
            <VueDatePicker
                v-model="dateFrom"
                placeholder="23 avgust"
            />
          </div>
          <p class="from"> dan </p>
          <div class="sort sort__datePicker">
            <VueDatePicker
                v-model="dateTo"
                placeholder="30 avgust"
            />
          </div>
        </div>
      </div>
      <table>
        <thead>
        <tr class="tableRow mb-18">
          <td class="col-1">Kimdan</td>
          <td class="col-2">Vagon nomeri</td>
          <td class="col-3">Tonna (vagon)</td>
          <td class="col-4">Narxi</td>
          <td class="col-5">Umumiy summa</td>
          <td class="col-6">Berildi</td>
          <td class="col-7">Qoldi</td>
          <td class="col-8">Sana</td>
        </tr>
        </thead>
        <div class="sement__content" v-if="sement">

          <tr class="tableRow odd">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--1">H</span> Huzayfa Baxromiy</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow even">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--2">A</span> Abu Ubayda Ibn</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow odd">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--1">H</span> Huzayfa Baxromiy</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow even">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--2">A</span> Abu Ubayda Ibn</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow odd">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--1">H</span> Huzayfa Baxromiy</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow even">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--2">A</span> Abu Ubayda Ibn</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow odd">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--1">H</span> Huzayfa Baxromiy</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow even">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--2">A</span> Abu Ubayda Ibn</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>

        </div>

        <div class="qop__content" v-if="qop">
          <tr class="tableRow odd">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--2">A</span> Abu Ubayda Ibn</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow even">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--1">H</span> Huzayfa Baxromiy</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow odd">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--2">A</span> Abu Ubayda Ibn</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow even">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--1">H</span> Huzayfa Baxromiy</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow odd">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--2">A</span> Abu Ubayda Ibn</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow even">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--1">H</span> Huzayfa Baxromiy</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow odd">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--2">A</span> Abu Ubayda Ibn</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow even">
            <td class="col-1">
              <div class="name"><span class="avatar avatar--1">H</span> Huzayfa Baxromiy</div>
            </td>
            <td class="col-2 colorDark">21232</td>
            <td class="col-3"><span class="colorDark">7</span> tonna</td>
            <td class="col-4"><span class="colorDark">490</span> so'm</td>
            <td class="col-5"><span class="colorDark">86,900,000</span> so’m</td>
            <td class="col-6"><span class="colorGreen">71,800,000</span> so’m</td>
            <td class="col-7"><span class="colorRed">12,100,000</span> so’m</td>
            <td class="col-8">2021-08-23</td>
          </tr>
          <tr class="tableRow borderBottom"> &nbsp;</tr>

        </div>


      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'incomes',
  data() {
    return {
      dateFrom: null,
      dateTo: null,
      incomeIcon: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5 18.75C27.5 23.5875 23.5875 27.5 18.75 27.5L20.0625 25.3125" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.5 11.25C2.5 6.4125 6.4125 2.5 11.25 2.5L9.9375 4.6875" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.125 5.56252L22.1 8.4375L27.025 5.57503" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.1001 13.525V8.42499" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.925 2.7625L17.925 4.42495C17.25 4.79995 16.6875 5.74994 16.6875 6.52494V9.69998C16.6875 10.475 17.2375 11.425 17.925 11.8L20.925 13.4625C21.5625 13.825 22.6125 13.825 23.2625 13.4625L26.2625 11.8C26.9375 11.425 27.5 10.475 27.5 9.69998V6.52494C27.5 5.74994 26.95 4.79995 26.2625 4.42495L23.2625 2.7625C22.625 2.4125 21.575 2.4125 20.925 2.7625Z" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.9375 19.3125L7.9 22.1875L12.8375 19.325" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.90039 27.275V22.175" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.7375 16.5125L3.73751 18.1749C3.06251 18.5499 2.5 19.4999 2.5 20.2749V23.45C2.5 24.225 3.05001 25.175 3.73751 25.55L6.7375 27.2125C7.375 27.575 8.42499 27.575 9.07499 27.2125L12.075 25.55C12.75 25.175 13.3125 24.225 13.3125 23.45V20.2749C13.3125 19.4999 12.7625 18.5499 12.075 18.1749L9.07499 16.5125C8.42499 16.1625 7.375 16.1625 6.7375 16.5125Z" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`,
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
      down: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#EDF1F7"/>
            <path d="M8.46997 10.74L12 14.26L15.53 10.74" stroke="#181A1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
      sement: true,
      qop: false
    }
  }

}
</script>

