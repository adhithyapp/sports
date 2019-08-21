export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'Administration', separator: true},
    {label: 'Dashboard', route: 'dashboard', iconClasses: 'fa fa-graph', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    {label: 'Homecare', iconClasses: 'fa fa-settings', children: [
        {label: 'Billing Code', route: 'settings/billingcode'},
        {label: 'ICD10 Code', route: 'settings/icd10code'},
        {label: 'Referrals', route: 'settings/referral'},
        {label: 'Office', route: 'settings/office'},
        {label:'Caregiver', route:'settings/caregiver'},
        {label: 'Physician', route: 'settings/physician'},
        {label: 'Payer', route:'settings/payer'},
        {label: 'Applicant', route:'settings/applicant'},
        {label: 'Colleges', route:'settings/colleges'},
        {label: 'Coach', route:'settings/coach'}
      ]},
   
    {label: 'Schedule', separator: true},
    {label: 'Schedule', route: 'schedule/view', iconClasses: 'fa fa-th1'},
    {label: 'Visits', route: 'visits/view', iconClasses: 'fa fa-th1'},
    {label: 'Plan Of Care', route: 'planofcare', iconClasses: 'fa fa-th1'},
    {label: 'Finance', separator: true},
    {label: 'Payrol', route: 'tabs', iconClasses: 'fa fa-tasks1'},
    
    // {label: 'Provider', iconClasses: 'fa fa-files-o', children: [
    //     {label: 'Default Box', route: 'boxs/box'},
    //     {label: 'Info Box', route: 'boxs/info-box'},
    //     {label: 'Small Box', route: 'boxs/small-box'}
    //   ]},
    
    
    {label: 'Liason', route: 'liason/add', iconClasses: 'fa fa-th1'},
    

    
    
  ]
};
