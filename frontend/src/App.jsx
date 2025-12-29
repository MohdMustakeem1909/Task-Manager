import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login.jsx'
import SignUp from './pages/auth/SignUp.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import CreateTask from './pages/admin/CreateTask.jsx'
import ManageTask from './pages/admin/ManageTask.jsx'
import ManageUsers from './pages/admin/ManageUsers.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import MyTasks from './pages/user/MyTasks.jsx'


const App = () => {
    return (
        <div>
            <BrowerRouter>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>

                {/* Admin Routes */}
                <Routes element={<PrivateRoute allowedRoles={['admin']}/>}>
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/create-task' element={<CreateTask />} />
                    <Route path='/admin/manage-tasks' element={<ManageTask />} />
                    <Route path='/admin/manage-users' element={<ManageUsers />} />
                </Routes>
                <Routes element={<PrivateRoute allowedRoles={['user']}/>}>
                <Route path='/user/dashboard' element={<Dashboard />} />
                <Route path='/user/tasks' element={<MyTasks />} />
                <Route path='/user/task-details/:id' element={<TaskDetails />} />        
                </Routes>
            </BrowerRouter>
        </div>
    )
}
export default App
