import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    language: "BN",
    htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>HTML Editor</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      
    }
    h1 {
      color: #2563eb;
    }
  </style>
</head>
<body>
  <h1>Hello World</h1>
  <p>Edit the HTML and see it live.</p>
</body>
</html>`
}

const htmlSlice = createSlice({
    name: "htmlStore",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
        changeHtmlCode: (state, action) => {
            state.htmlCode = action.payload;
        }
    }
})

export const { changeLanguage, changeHtmlCode } = htmlSlice.actions;
export default htmlSlice.reducer;

