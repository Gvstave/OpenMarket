import './App.css'
import Login from './pages/login'
import SignUp from './pages/sign-up';
import SetBuyerProfile from './features/auth/set-buyer-profile';
import SetSellerProfile from './features/auth/set-seller-profile';
import Homepage from './pages/home';
import ProductDetails from './pages/product-details';
import { Routes, Route } from "react-router-dom";
import { TOASTER_DURATION } from './utils/toaster_duration';
import { Toaster } from 'react-hot-toast';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import HelpCenter from './pages/help-center';
import SearchResults from './pages/search-results';
import SellerProfile from './pages/seller-profile';
import MainLayout from './shared/layouts/main-layout';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path='/community' element={<SearchResults />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path="/seller-profile" element={<SellerProfile />} />
        <Route path="/seller-profile/:sellerId" element={<SellerProfile />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
      </Route>
      {/* <Route path="/product/:slug" element={<ProductDetails />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/set-buyer-profile" element={<SetBuyerProfile />} />
      <Route path="/set-seller-profile" element={<SetSellerProfile />} />
        {/* <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: TOASTER_DURATION,
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "8px",
          },
        }}
      /> */}
    </Routes>
  );
}

