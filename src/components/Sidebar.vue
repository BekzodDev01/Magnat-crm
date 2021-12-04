<template>
  <div class="wrapper">
    <div class="sidebar">
      <h1 class="sidebar__header">MG</h1>
      <div class="sidebar__icons">
        <router-link  class="icon" to="/" exact-active-class="activeLink">
          <span v-html="svgIcons.icon[0]"></span>
        </router-link>
        <router-link class="icon" to="/income" exact-active-class="activeLink">
        <span v-html="svgIcons.icon[1]"></span>
        </router-link>
        <router-link  class="icon" to="#" exact-active-class="activeLink">
          <span v-html="svgIcons.icon[2]"></span>
        </router-link>
        <router-link  class="icon" to="#1" exact-active-class="activeLink">
          <span v-html="svgIcons.icon[3]"></span>
        </router-link>
        <router-link  class="icon" to="#2" exact-active-class="activeLink">
          <span v-html="svgIcons.icon[4]" exact-active-class="activeLink"></span>
        </router-link>
        <router-link  class="icon" to="/finance" exact-active-class="activeLink">
          <span v-html="svgIcons.icon[5]"></span>
        </router-link>
        <router-link  class="icon" to="#4" exact-active-class="activeLink">
          <span v-html="svgIcons.icon[6]"></span>
        </router-link>

        <img src="../assets/images/image1.png" alt="User" class="sidebar__img">
      </div>
    </div>
    <span class="scroll">&nbsp;</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgIcons: {
        icon: [`<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.275 3.54999L4.5375 8.79999C3.4125 9.67499 2.5 11.5375 2.5 12.95V22.2125C2.5 25.1125 4.8625 27.4875 7.7625 27.4875H22.2375C25.1375 27.4875 27.5 25.1125 27.5 22.225V13.125C27.5 11.6125 26.4875 9.67499 25.25 8.81249L17.525 3.39999C15.775 2.17499 12.9625 2.23749 11.275 3.54999Z" stroke="#507BE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 22.4875V18.7375" stroke="#507BE8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,

          `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.25 14.3875L15 18.1375L18.75 14.3875" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 18.1375V8.1375" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.5 20.6375C12.3625 22.2625 17.6375 22.2625 22.5 20.6375" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                `, `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2625 3.65002L23.6375 6.92502C25.7625 7.86252 25.7625 9.41252 23.6375 10.35L16.2625 13.625C15.425 14 14.05 14 13.2125 13.625L5.83752 10.35C3.71252 9.41252 3.71252 7.86252 5.83752 6.92502L13.2125 3.65002C14.05 3.27502 15.425 3.27502 16.2625 3.65002Z" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.75 13.75C3.75 14.8 4.5375 16.0125 5.5 16.4375L13.9875 20.2125C14.6375 20.5 15.375 20.5 16.0125 20.2125L24.5 16.4375C25.4625 16.0125 26.25 14.8 26.25 13.75" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.75 20C3.75 21.1625 4.4375 22.2125 5.5 22.6875L13.9875 26.4625C14.6375 26.75 15.375 26.75 16.0125 26.4625L24.5 22.6875C25.5625 22.2125 26.25 21.1625 26.25 20" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `, `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.25 11.8875L15 8.13751L18.75 11.8875" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 8.13751V18.1375" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.5 20.6375C12.3625 22.2625 17.6375 22.2625 22.5 20.6375" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`, `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M15 6.95001H27.5" stroke="#91A3B8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M17.775 2.5H24.725C26.95 2.5 27.5 3.05 27.5 5.25V10.3875C27.5 12.5875 26.95 13.1375 24.725 13.1375H17.775C15.55 13.1375 15 12.5875 15 10.3875V5.25C15 3.05 15.55 2.5 17.775 2.5Z" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M2.5 21.325H15" stroke="#91A3B8" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M5.275 16.875H12.225C14.45 16.875 15 17.425 15 19.625V24.7625C15 26.9625 14.45 27.5125 12.225 27.5125H5.275C3.05 27.5125 2.5 26.9625 2.5 24.7625V19.625C2.5 17.425 3.05 16.875 5.275 16.875Z" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M27.5 18.75C27.5 23.5875 23.5875 27.5 18.75 27.5L20.0625 25.3125" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M2.5 11.25C2.5 6.4125 6.4125 2.5 11.25 2.5L9.93752 4.6875" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
             `, `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8398 17.9123C10.8398 19.5248 12.0773 20.8248 13.6148 20.8248H16.7523C18.0898 20.8248 19.1773 19.6873 19.1773 18.2873C19.1773 16.7623 18.5148 16.2248 17.5273 15.8748L12.4898 14.1248C11.5023 13.7748 10.8398 13.2373 10.8398 11.7123C10.8398 10.3123 11.9273 9.1748 13.2648 9.1748H16.4023C17.9398 9.1748 19.1773 10.4748 19.1773 12.0873" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 7.5V22.5" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.75 27.5H11.25C5 27.5 2.5 25 2.5 18.75V11.25C2.5 5 5 2.5 11.25 2.5H18.75C25 2.5 27.5 5 27.5 11.25V18.75C27.5 25 25 27.5 18.75 27.5Z" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,

                `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke="#91A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`]
      }
    }
  }
}
</script>
