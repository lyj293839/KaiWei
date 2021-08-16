export default [
    {
        path: '/personal',
        name: 'personal',
        component: () => import('../components/personal/index'),
        meta:{
          isLogin:true,
        },
        children: [
          {
            path: '/personal_center',
            name: 'personal_center',
            component: () => import('../components/personal/view/index'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_order',
            name: 'personal_order',
            component: () => import('../components/personal/view/order'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/order_package',
            name: 'order_package',
            component: () => import('../components/personal/view/order_package'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_amount',
            name: 'personal_amount',
            component: () => import('../components/personal/view/amount'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_inquire',
            name: 'personal_inquire',
            component: () => import('../components/personal/view/inquire'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_collect',
            name: 'personal_collect',
            component: () => import('../components/personal/view/collect'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_credit',
            name: 'personal_credit',
            component: () => import('../components/personal/view/credit'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_delivery',
            name: 'personal_delivery',
            component: () => import('../components/personal/view/delivery'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_history',
            name: 'personal_history',
            component: () => import('../components/personal/view/history'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_feedback',
            name: 'personal_feedback',
            component: () => import('../components/personal/view/feedback'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_account',
            name: 'personal_account',
            component: () => import('../components/personal/view/account'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_bill',
            name: 'personal_bill',
            component: () => import('../components/personal/view/bill'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_changePassworld',
            name: 'personal_changePassworld',
            component: () => import('../components/personal/view/changePassworld'),
            meta:{
              isLogin:true
            },
          },
          {
            path: '/personal_changeEmail',
            name: 'personal_changeEmail',
            component: () => import('../components/personal/view/changeEmail'),
            meta:{
              isLogin:true
            },
          },
        ]
    },
]
