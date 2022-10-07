import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/Homepage'
import CreateWordPage from '../pages/CreateWordPage/CreateWordPage'
import SignupPage from '../pages/SignupPage/SignupPage';
import UserHomePage from '../pages/UserHomePage/UserHomePage'
import PostsPage from '../pages/PostsPage/PostsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import DictPage from '../pages/DictPage/DictPage'
import EditWordPage from '../pages/EditWordPage/EditWordPage'
import ParHis from '../pages/ParHis/ParHis'
import CreatePostsPage from '../pages/CreatePostsPage/CreatePostsPage';
import EditPostPage from '../pages/EditPostPage/EditPostPage';
import Post from '../pages/Post/Post';



const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create_word" element={<CreateWordPage />} />
            <Route path="/sign_up" element={<SignupPage />} />
            <Route path="/user_home" element={<UserHomePage />} />
            <Route path='/posts' element={<PostsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/paraguay" element={<ParHis />} />
            <Route path="/dict_list" element={<DictPage />} />
            <Route path="/update_word/:id" element={<EditWordPage />} />
            <Route path='/create_post' element={<CreatePostsPage />} />
            <Route path='/edit_post/:id' element={<EditPostPage />} />
            <Route path='/post/:id' element={<Post />} />
        </Routes>
    )
}

export default AppRoutes