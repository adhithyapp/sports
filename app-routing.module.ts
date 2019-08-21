import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './theme/home/home.component';
import { LoginComponent } from './login/login.component';
import {HomeModule} from './screens/home/home.module'


const routes: Routes = [
  {
  path: '',
  data: {
      title: 'Get Started'
  },
  children: [
    // {
    //   path: '',
    //   component: HomeComponent
    // },
    // {
    // path: 'home',
    //   component: HomeComponent
    // },
    {
      path: 'login',
      component: LoginComponent
    },
    
    {
      path: 'accordion',
      loadChildren: './theme/+accordion/accordion.module#AccordionModule',
      data: {
        title: 'Accordion'
      }
    }, {
      path: 'alert',
      loadChildren: './theme/+alert/alert.module#AlertModule',
      data: {
        title: 'Alert',
      }
    }, {
      path: 'layout',
      data: {
        title: 'Layout',
      },
      children: [
        {
          path: 'configuration',
          loadChildren: './theme/+layout/configuration/configuration.module#ConfigurationModule',
          data: {
            title: 'Configuration'
          }
        }, {
          path: 'custom',
          loadChildren: './theme/+layout/custom/custom.module#CustomModule',
          data: {
            title: 'Disable Layout'
            // disableLayout: true
          }
        }, {
          path: 'content',
          loadChildren: './theme/+layout/content/content.module#ContentModule',
          data: {
            title: 'Content'
          }
        }, {
          path: 'header',
          loadChildren: './theme/+layout/header/header.module#HeaderModule',
          data: {
            title: 'Header'
          }
        }, {
          path: 'sidebar-left',
          loadChildren: './theme/+layout/sidebar-left/sidebar-left.module#SidebarLeftModule',
          data: {
            title: 'Sidebar Left'
          }
        }, {
          path: 'sidebar-right',
          loadChildren: './theme/+layout/sidebar-right/sidebar-right.module#SidebarRightModule',
          data: {
            title: 'Sidebar Right'
          }
        },
      ]
    }, {
      path: 'boxs',
      data: {
        title: 'Boxs',
      },
      children: [
        {
          path: 'box',
          loadChildren: './theme/+boxs/box-default/box-default.module#BoxDefaultModule',
          data: {
            title: 'Box'
          }
        }, {
          path: 'info-box',
          loadChildren: './theme/+boxs/box-info/box-info.module#BoxInfoModule',
          data: {
            title: 'Info Box'
          }
        }, {
          path: 'small-box',
          loadChildren: './theme/+boxs/box-small/box-small.module#BoxSmallModule',
          data: {
            title: 'Small Box'
          }
        }
      ]}, {
        path: 'dropdown',
        loadChildren: './theme/+dropdown/dropdown.module#DropdownModule',
        data: {
          title: 'Dropdown',
        }
      }, {
        path: 'tabs',
        loadChildren: './theme/+tabs/tabs.module#TabsModule',
        data: {
          title: 'Tabs',
        }
      }
    ]
  }, {
    path: 'form',
    data: {
      title: 'Form',
    },
    children: [
      {
        path: 'input-text',
        loadChildren: './theme/+form/input-text/input-text.module#InputTextModule',
        data: {
          title: 'Input Text',
        }
      }
    ]},
  // }, {
  //   path: 'login',
  //   loadChildren: './theme/+login/login.module#LoginModule',
  //   data: {
  //     customLayout: true
  //   }
  // }, 
  {
    path: 'register',
    loadChildren: './theme/+register/register.module#RegisterModule',
    data: {
      customLayout: true
    }
  }
  ,{
    path: 'dashoard',
    loadChildren: './screens/dashboard/dashboard.module#DashboardModule',
    data: {
      customLayout: true
    }

  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
