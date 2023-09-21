// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useState } from "react";

// export const [data, setData] = useState(null)
// export const [text, setText] = useState(null)

// export const signUp = async(email, password) =>{
//     try {
//         const userData = { email, password };
//         await AsyncStorage.setItem('key_userData', JSON.stringify(userData));
//         console.log('Đăng ký thành công!');
//         alert("Đăng ký thành công")
//     } catch (error) {
//         console.error('Lỗi khi đăng ký:', error);
//     }
// };
// export const login = async (email, password) => {
//     try {
//       // Lấy thông tin đăng ký từ AsyncStorage
//       const userData = await AsyncStorage.getItem('key_userData');
  
//       if (userData) {
//         const parsedUserData = JSON.parse(userData);
  
//         // Kiểm tra thông tin đăng nhập
//         if (parsedUserData.email === email && parsedUserData.password === password) {
//             // setData(userData)
//           console.log('Đăng nhập thành công!');
//         } else {
//           console.log('Email hoặc mật khẩu không đúng.');
//           alert("Email hoặc mật khẩu không đúng.")
//         }
//       } else {
//         console.log('Không tìm thấy thông tin đăng ký.');
//         alert("Không tìm thấy thông tin đăng ký.")

//       }
//     } catch (error) {
//       console.error('Lỗi khi đăng nhập:', error);
//     }
// };