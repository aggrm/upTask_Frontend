import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AppLayout from '@/layouts/AppLayout'
import DashboardView from '@/views/DashboardView'
import CreateProjectView from './views/projects/CreateProjectView'
import EditProjectView from './views/projects/EditProjectView'

export default function router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<DashboardView />} index></Route>
                    <Route path='/projects/create' element={<CreateProjectView />} index></Route>
                    <Route path='/projects/:projectId/edit' element={<EditProjectView />} index></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

