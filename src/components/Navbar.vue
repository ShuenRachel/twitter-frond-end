<template>
  <div class="navbar-panel">
    <div class="nav-wrapper">
      <div class="nav-icon">
        <img
          src="../assets/icon/logo.svg"
          alt=""
          srcset=""
          @click="$router.push('/user/home')"
        />
      </div>
      <div class="nav-content" v-if="isAdmin">
        <div class="link-wrapper">
          <router-link class="route-link" to="/admin/tweets"
            ><svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ activeSvg : currentPathName === 'admin-tweets' }"
            >
              <path
                d="M22.58 6.34986L12.475 0.896855C12.178 0.736855 11.821 0.736855 11.525 0.896855L1.42502 6.34986C0.939018 6.61386 0.758018 7.21986 1.02002 7.70586C1.20002 8.04086 1.54502 8.23086 1.90002 8.23086C2.06002 8.23086 2.22402 8.19286 2.37502 8.11086L3.10902 7.71486L4.69902 18.9649C4.91502 20.1789 6.00902 21.0269 7.35902 21.0269H16.641C17.991 21.0269 19.085 20.1789 19.303 18.9389L20.891 7.71386L21.628 8.11186C22.113 8.37486 22.72 8.19386 22.982 7.70786C23.245 7.22186 23.062 6.61486 22.578 6.35286L22.58 6.34986ZM12 14.4349C10.205 14.4349 8.75002 12.9799 8.75002 11.1849C8.75002 9.38986 10.205 7.93486 12 7.93486C13.795 7.93486 15.25 9.38986 15.25 11.1849C15.25 12.9799 13.795 14.4349 12 14.4349Z"
              />
            </svg>
            推文清單</router-link
          >
          <router-link class="route-link" to="/admin/users"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ activeSvg : currentPathName === 'admin-users' }"
            >
              <path
                d="M12 11.8158C13.355 11.8158 14.872 11.6658 15.84 10.5598C16.654 9.62976 16.918 8.19176 16.646 6.16776C16.266 3.34276 14.529 1.65576 12 1.65576C9.47103 1.65576 7.73403 3.34276 7.35403 6.16976C7.08203 8.19176 7.34603 9.62976 8.16003 10.5598C9.12803 11.6668 10.645 11.8158 12 11.8158ZM8.84003 6.36776C9.00203 5.16776 9.62703 3.15576 12 3.15576C14.373 3.15576 14.998 5.16876 15.16 6.36776C15.367 7.91776 15.217 8.99476 14.71 9.57276C14.255 10.0928 13.444 10.3158 12 10.3158C10.556 10.3158 9.74503 10.0928 9.29003 9.57276C8.78303 8.99476 8.63303 7.91676 8.84003 6.36776ZM20.28 19.2358C19.403 15.7098 15.998 13.2458 12 13.2458C8.00203 13.2458 4.59703 15.7098 3.72003 19.2358C3.54803 19.9278 3.69203 20.6358 4.11503 21.1758C4.52303 21.6958 5.15503 21.9958 5.84803 21.9958H18.152C18.845 21.9958 19.477 21.6958 19.885 21.1758C20.309 20.6358 20.452 19.9288 20.279 19.2358H20.28ZM18.704 20.2518C18.578 20.4118 18.388 20.4978 18.152 20.4978H5.84803C5.61303 20.4978 5.42203 20.4128 5.29603 20.2518C5.15903 20.0778 5.11603 19.8398 5.17603 19.5978C5.88603 16.7428 8.69303 14.7478 12 14.7478C15.307 14.7478 18.114 16.7418 18.824 19.5978C18.884 19.8398 18.841 20.0778 18.704 20.2518Z"
              />
            </svg>
            使用者列表</router-link
          >
        </div>
      </div>
      <div class="nav-content" v-else>
        <div class="link-wrapper">
          <router-link class="route-link" to="/user/home"
            ><svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ activeSvg : currentPathName === 'user-home' }"
            >
              <path
                d="M22.58 6.34986L12.475 0.896855C12.178 0.736855 11.821 0.736855 11.525 0.896855L1.42502 6.34986C0.939018 6.61386 0.758018 7.21986 1.02002 7.70586C1.20002 8.04086 1.54502 8.23086 1.90002 8.23086C2.06002 8.23086 2.22402 8.19286 2.37502 8.11086L3.10902 7.71486L4.69902 18.9649C4.91502 20.1789 6.00902 21.0269 7.35902 21.0269H16.641C17.991 21.0269 19.085 20.1789 19.303 18.9389L20.891 7.71386L21.628 8.11186C22.113 8.37486 22.72 8.19386 22.982 7.70786C23.245 7.22186 23.062 6.61486 22.578 6.35286L22.58 6.34986ZM12 14.4349C10.205 14.4349 8.75002 12.9799 8.75002 11.1849C8.75002 9.38986 10.205 7.93486 12 7.93486C13.795 7.93486 15.25 9.38986 15.25 11.1849C15.25 12.9799 13.795 14.4349 12 14.4349Z"
              />
            </svg>
            首頁</router-link
          >
          <!-- TODO add active class when viewing personal profile -->
          <router-link
            class="route-link"
            :class="{ active : isCurrentUserPage }"
            :to="{
              name: 'user-all-tweets',
              params: { user_id: currentUser.id },
            }"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ activeSvg : isCurrentUserPage }"
            >
              <path
                d="M12 11.8158C13.355 11.8158 14.872 11.6658 15.84 10.5598C16.654 9.62976 16.918 8.19176 16.646 6.16776C16.266 3.34276 14.529 1.65576 12 1.65576C9.47103 1.65576 7.73403 3.34276 7.35403 6.16976C7.08203 8.19176 7.34603 9.62976 8.16003 10.5598C9.12803 11.6668 10.645 11.8158 12 11.8158ZM8.84003 6.36776C9.00203 5.16776 9.62703 3.15576 12 3.15576C14.373 3.15576 14.998 5.16876 15.16 6.36776C15.367 7.91776 15.217 8.99476 14.71 9.57276C14.255 10.0928 13.444 10.3158 12 10.3158C10.556 10.3158 9.74503 10.0928 9.29003 9.57276C8.78303 8.99476 8.63303 7.91676 8.84003 6.36776ZM20.28 19.2358C19.403 15.7098 15.998 13.2458 12 13.2458C8.00203 13.2458 4.59703 15.7098 3.72003 19.2358C3.54803 19.9278 3.69203 20.6358 4.11503 21.1758C4.52303 21.6958 5.15503 21.9958 5.84803 21.9958H18.152C18.845 21.9958 19.477 21.6958 19.885 21.1758C20.309 20.6358 20.452 19.9288 20.279 19.2358H20.28ZM18.704 20.2518C18.578 20.4118 18.388 20.4978 18.152 20.4978H5.84803C5.61303 20.4978 5.42203 20.4128 5.29603 20.2518C5.15903 20.0778 5.11603 19.8398 5.17603 19.5978C5.88603 16.7428 8.69303 14.7478 12 14.7478C15.307 14.7478 18.114 16.7418 18.824 19.5978C18.884 19.8398 18.841 20.0778 18.704 20.2518Z"
              />
            </svg>
            個人資料</router-link
          >
          <router-link class="route-link" to="/user/setting"
            ><svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ activeSvg : currentPathName === 'user-setting' }"
            >
              <path
                d="M11 7.20996C8.90996 7.20996 7.20996 8.90996 7.20996 11C7.20996 13.09 8.90996 14.79 11 14.79C13.09 14.79 14.79 13.09 14.79 11C14.79 8.90996 13.09 7.20996 11 7.20996ZM11 13.29C9.73796 13.29 8.70996 12.264 8.70996 11C8.70996 9.73596 9.73996 8.70996 11 8.70996C12.26 8.70996 13.29 9.73596 13.29 11C13.29 12.264 12.262 13.29 11 13.29Z"
              />
              <path
                d="M11.36 21.375H10.638C9.45505 21.375 8.48405 20.487 8.37605 19.311L8.36205 19.164C8.33705 18.877 8.15505 18.631 7.89005 18.52C7.60405 18.4 7.30805 18.455 7.09205 18.635L6.97605 18.732C6.10805 19.457 4.72305 19.395 3.91605 18.592L3.40605 18.082C2.57005 17.242 2.51005 15.928 3.26605 15.022L3.36405 14.904C3.55005 14.682 3.59405 14.381 3.48605 14.117C3.37605 13.845 3.12805 13.663 2.84005 13.637L2.69005 13.623C1.51005 13.516 0.623047 12.543 0.623047 11.361V10.639C0.623047 9.456 1.51105 8.485 2.68705 8.377L2.84305 8.363C3.12805 8.338 3.37305 8.156 3.48505 7.89C3.59505 7.62 3.55005 7.317 3.36505 7.095L3.27105 6.979C2.51405 6.071 2.57305 4.756 3.40805 3.919L3.92005 3.407C4.72405 2.603 6.10805 2.542 6.98005 3.267L7.09605 3.365C7.31405 3.549 7.62405 3.595 7.88605 3.487C8.15605 3.375 8.33805 3.129 8.36305 2.844L8.37705 2.691C8.48405 1.511 9.45705 0.625 10.639 0.625H11.361C12.544 0.625 13.515 1.513 13.623 2.689L13.637 2.845C13.662 3.13 13.843 3.375 14.109 3.485C14.386 3.602 14.689 3.547 14.903 3.368L15.023 3.266C15.89 2.543 17.277 2.604 18.083 3.406L18.593 3.918C19.429 4.756 19.489 6.071 18.733 6.978L18.633 7.096C18.445 7.316 18.399 7.618 18.51 7.884C18.622 8.154 18.87 8.334 19.156 8.362L19.308 8.376C20.488 8.483 21.375 9.456 21.375 10.638V11.361C21.375 12.544 20.487 13.515 19.311 13.623L19.156 13.637C18.872 13.661 18.626 13.842 18.516 14.107C18.403 14.379 18.449 14.681 18.633 14.902L18.733 15.022C19.489 15.927 19.429 17.242 18.593 18.082L18.083 18.592C17.276 19.396 15.893 19.456 15.023 18.732L14.908 18.636C14.691 18.453 14.378 18.406 14.118 18.514C13.845 18.628 13.663 18.874 13.638 19.16L13.624 19.31C13.517 20.483 12.544 21.37 11.362 21.37L11.36 21.375ZM7.58705 16.955C7.88705 16.955 8.18005 17.015 8.45705 17.13C9.24705 17.458 9.78105 18.184 9.85705 19.026L9.87105 19.173C9.90805 19.573 10.238 19.873 10.641 19.873H11.363C11.763 19.873 12.093 19.573 12.131 19.173L12.145 19.025C12.221 18.183 12.755 17.458 13.537 17.133C14.33 16.803 15.233 16.951 15.87 17.483L15.983 17.577C16.161 17.725 16.349 17.757 16.476 17.757C16.682 17.757 16.876 17.677 17.022 17.53L17.532 17.02C17.816 16.736 17.837 16.29 17.58 15.982L17.48 15.862C16.938 15.212 16.803 14.322 17.128 13.539C17.454 12.749 18.18 12.219 19.022 12.142L19.177 12.128C19.574 12.091 19.877 11.761 19.877 11.358V10.636C19.877 10.236 19.574 9.906 19.175 9.868L19.023 9.854C18.177 9.776 17.453 9.244 17.128 8.461C16.802 7.673 16.938 6.783 17.481 6.134L17.581 6.016C17.838 5.706 17.817 5.26 17.533 4.976L17.023 4.466C16.877 4.319 16.683 4.239 16.477 4.239C16.35 4.239 16.162 4.271 15.985 4.419L15.865 4.519C15.231 5.047 14.315 5.189 13.543 4.873C12.755 4.546 12.223 3.821 12.146 2.977L12.132 2.822C12.097 2.425 11.767 2.122 11.365 2.122H10.642C10.242 2.122 9.91205 2.425 9.87405 2.824L9.86005 2.976C9.78405 3.819 9.25205 4.544 8.47005 4.869C7.68305 5.195 6.77705 5.052 6.14005 4.519L6.02205 4.423C5.84205 4.273 5.65405 4.243 5.52705 4.243C5.32105 4.243 5.12705 4.323 4.98105 4.469L4.46905 4.979C4.18705 5.263 4.16605 5.709 4.42305 6.017L4.52305 6.135C5.06305 6.788 5.20005 7.679 4.87505 8.46C4.54805 9.248 3.82305 9.78 2.98005 9.857L2.82405 9.871C2.42705 9.908 2.12405 10.238 2.12405 10.641V11.363C2.12405 11.763 2.42705 12.093 2.82605 12.131L2.97605 12.145C3.82405 12.223 4.54905 12.757 4.87305 13.541C5.19805 14.327 5.06305 15.216 4.52005 15.866L4.42405 15.981C4.16405 16.291 4.18605 16.737 4.47005 17.021L4.98005 17.531C5.12605 17.678 5.32005 17.758 5.52605 17.758C5.65305 17.758 5.84105 17.728 6.01805 17.578L6.13405 17.482C6.54005 17.146 7.05705 16.958 7.58705 16.958V16.955Z"
              />
            </svg>
            設定</router-link
          >
        </div>
        <button class="btn btn-orange" @click.stop.prevent="showModal">
          推文
        </button>
      </div>
      <div class="nav-footer">
        <div class="nav-footer-btn pointer" @click="logout">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            stroke="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 13L5 9M5 9L9 5M5 9H19M14 13V14C14 14.7956 13.6839 15.5587 13.1213 16.1213C12.5587 16.6839 11.7956 17 11 17H4C3.20435 17 2.44129 16.6839 1.87868 16.1213C1.31607 15.5587 1 14.7956 1 14V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H11C11.7956 1 12.5587 1.31607 13.1213 1.87868C13.6839 2.44129 14 3.20435 14 4V5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>登出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    isCurrentUserPage: {
      type: Boolean,
    },
  },
  computed: {
    ...mapState(["currentUser", "isAdmin", "currentPathName"]),
  },
  methods: {
    showModal() {
      this.$emit("after-show-modal");
    },
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/user/login");
    },
  },
  watch: {
    isCurrentUserPage(newValue) {
      this.isCurrentUserPage = newValue;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.activeSvg {
  fill: $brand-orange
}

.navbar-panel {
  border-right: $border-setting;
  .nav-wrapper {
    margin-left: 113px;
    margin-right: 55px;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
}

.nav {
  &-icon {
    width: 50px;
    height: 50px;
    margin-top: 14px;
    margin-bottom: 45px;
    cursor: pointer;
  }
  &-content {
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    .link-wrapper {
      display: flex;
      flex-flow: column nowrap;
      margin-bottom: 24px;
      .route-link:nth-child(1),.route-link:nth-child(2) {
        margin-bottom: 30px;
      }
      .route-link {
        font-weight: 700;
        font-size: 18px;
        color: $text-main;
        svg {
          margin-right: 20px;
        }
        &.active,
        &:hover {
          color: $brand-orange;
        }
      }
    }
  }
  &-footer {
    margin-bottom: 22px;
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 77px;
      cursor: pointer;
      svg {
        margin-right: 23px;
      }
      &:hover {
        svg {
          stroke: $brand-orange;
        }
        span {
          color: $brand-orange;
        }
      }
    }
  }
}
</style>
