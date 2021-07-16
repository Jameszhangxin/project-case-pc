import dashboard from '@/views/dashboard';
import applicationSystem from '@/views/dashboard/report/applicationSystem';
import unusualSystem from '@/views/dashboard/report/unusualSystem';
import businessPoint from '@/views/dashboard/report/businessPoint';
import systemMonitor from '@/views/dashboard/report/systemMonitor';
import trace from '@/views/dashboard/report/trace';

const routes = [{
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    children: [
        {
            path : "applicationSystem",
            name : "applicationSystem",
            component : applicationSystem
        },
        {
            path : "unusualSystem",
            name : "unusualSystem",
            component : unusualSystem
        },
        {
            path : "businessPoint",
            name : "businessPoint",
            component : businessPoint
        },
      {
        path : "systemMonitor",
        name : "systemMonitor",
        component : systemMonitor
      }
      ,
      {
        path : "trace",
        name : "trace",
        component : trace
      }
    ]
}];

export default {
    routes
};
