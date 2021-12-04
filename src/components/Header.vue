<template>
  <div class="header row">
    <p class="header__heading">Assalamu aleykum !</p>
    <p class="header__text">Magnat boshqaruv paneliga xush kelibsiz</p>
    <span class="header__notification" v-html="notification"/>
      <div class="header__search">
        <span class="search__icon" v-html="search"></span>
        <input type="text" class="search__input" v-html="search" placeholder="Qidiruv..."/>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      notification: `<svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.0201 6.91C8.71009 6.91 6.02009 9.6 6.02009 12.91V15.8C6.02009 16.41 5.76009 17.34 5.45009 17.86L4.30009 19.77C3.59009 20.95 4.08009 22.26 5.38009 22.7C9.69009 24.14 14.3401 24.14 18.6501 22.7C19.8601 22.3 20.3901 20.87 19.7301 19.77L18.5801 17.86C18.2801 17.34 18.0201 16.41 18.0201 15.8V12.91C18.0201 9.61 15.3201 6.91 12.0201 6.91Z" stroke="#91A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
        <path d="M13.8699 7.2C13.5599 7.11 13.2399 7.04 12.9099 7C11.9499 6.88 11.0299 6.95 10.1699 7.2C10.4599 6.46 11.1799 5.94 12.0199 5.94C12.8599 5.94 13.5799 6.46 13.8699 7.2Z" stroke="#91A3B8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.02 23.06C15.02 24.71 13.67 26.06 12.02 26.06C11.2 26.06 10.44 25.72 9.90002 25.18C9.36002 24.64 9.02002 23.88 9.02002 23.06" stroke="#91A3B8" stroke-width="1.5" stroke-miterlimit="10"/>
        <rect x="19" width="5" height="5" rx="2.5" fill="#507BE8"/>
        </svg>`,
      search : `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#91A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5 16.5L15 15" stroke="#91A3B8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    }
  }
}
</script>

