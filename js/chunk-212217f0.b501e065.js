(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-212217f0"],{"5a4c":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"follow-list"},[s("div",{staticClass:"tweet"},[s("div",{staticClass:"avatar-container"},[s("div",{staticClass:"tweet__user-avatar pointer",style:{backgroundImage:"url("+t.user.avatar+")"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toUserProfilePage(t.user.id)}}})]),s("div",{staticClass:"tweet__info-container"},[s("div",{staticClass:"info"},[s("span",{staticClass:"name pointer",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toUserProfilePage(t.user.id)}}},[t._v(t._s(t.user.name))]),s("span",{staticClass:"account pointer",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toUserProfilePage(t.user.id)}}},[t._v(t._s(t.user.account))]),s("div",{staticClass:"content"},[s("p",[t._v(" "+t._s(t.user.introduction)+" ")])])]),s("div",{staticClass:"follow-ship"},[t.user.isFollowing?s("button",{staticClass:"following",attrs:{disabled:t.isProcessing||t.user.id===t.currentUser.id},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFollowing(t.user.id)}}},[t._v(" 正在跟隨 ")]):s("button",{staticClass:"follow",attrs:{disabled:t.isProcessing||t.user.id===t.currentUser.id},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFollowing(t.user.id)}}},[t._v(" 跟隨 ")])])])])])},n=[],i=s("1da1"),a=s("5530"),o=(s("96cf"),s("d9e2"),s("4cce")),c=s("ac0d"),l=s("2f62"),u={mixins:[c["a"]],props:{initUser:{type:Object}},data:function(){return{user:{},isProcessing:!1}},computed:Object(a["a"])({},Object(l["b"])(["currentUser"])),methods:{fetchUser:function(){this.initUser.followerId?(this.user=this.initUser,this.user.id=this.initUser.followerId):this.initUser.followingId&&(this.user=this.initUser,this.user.id=this.initUser.followingId)},addFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.isProcessing=!0,s.prev=1,s.next=4,o["a"].addFollowing(t);case 4:if(r=s.sent,"OK"===r.statusText){s.next=7;break}throw new Error(r.message);case 7:e.user.isFollowing=!0,e.isProcessing=!1,e.$emit("after-follow-change"),s.next=16;break;case 12:s.prev=12,s.t0=s["catch"](1),e.ToastError({title:"無法追隨用戶，請稍後再試"}),e.isProcessing=!1;case 16:case"end":return s.stop()}}),s,null,[[1,12]])})))()},deleteFollowing:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return e.isProcessing=!0,s.prev=1,s.next=4,o["a"].deleteFollowing(t);case 4:if(r=s.sent,"OK"===r.statusText){s.next=7;break}throw new Error(r.message);case 7:e.user.isFollowing=!1,e.isProcessing=!1,e.$emit("after-follow-change"),s.next=16;break;case 12:s.prev=12,s.t0=s["catch"](1),e.ToastError({title:"無法取消追隨用戶，請稍後再試"}),e.isProcessing=!1;case 16:case"end":return s.stop()}}),s,null,[[1,12]])})))()},toUserProfilePage:function(t){this.isAdmin||this.$router.push({name:"user-all-tweets",params:{user_id:t}})}},created:function(){this.fetchUser()}},f=u,d=(s("b399"),s("2877")),w=Object(d["a"])(f,r,n,!1,null,"73f6027e",null);e["a"]=w.exports},b399:function(t,e,s){"use strict";s("b52f")},b52f:function(t,e,s){},e85a:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-follower-container"},[s("section",{staticClass:"follow-nav-tab"},[s("NavTabs")],1),s("section",{staticClass:"follow-list"},[t._l(t.followingsData,(function(e){return s("FollowList",{key:e.followingId,attrs:{"init-user":e},on:{"after-follow-change":t.afterFollowChange}})})),t.isEmptyData?s("div",{staticClass:"empty-data"},[t._v("目前尚無跟隨中")]):t._e()],2)])},n=[],i=s("1da1"),a=(s("96cf"),s("d9e2"),s("8bb1")),o=s("5a4c"),c=s("4cce"),l=s("ac0d"),u={mixins:[l["a"]],components:{NavTabs:a["a"],FollowList:o["a"]},data:function(){return{followingsData:[],isEmptyData:!1}},methods:{fetchFollowings:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c["a"].getFollowings(t);case 3:if(r=s.sent,"OK"===r.statusText){s.next=6;break}throw new Error(r.message);case 6:e.followingsData=r.data,e.isEmptyData=!e.followingsData.length,s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](0),e.ToastError({title:"無法取得用戶追隨中清單，請稍後再試"});case 13:case"end":return s.stop()}}),s,null,[[0,10]])})))()},afterFollowChange:function(){this.$emit("after-follow-change")}},created:function(){var t=this.$route.params.user_id;this.fetchFollowings(t)},beforeRouteUpdate:function(t,e,s){var r=t.params.user_id;this.fetchFollowings(r),s()}},f=u,d=s("2877"),w=Object(d["a"])(f,r,n,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-212217f0.b501e065.js.map