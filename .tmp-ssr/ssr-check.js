import React, { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Outlet, RouterProvider, createMemoryRouter } from "react-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, BookText, ChevronDown, ChevronRight, ChevronUp, Chrome, Clock, Code, Code2, Copy, CopyCheck, FileCode, Globe, Hash, Home, Layout, Menu, Palette, Radio, Search, Sparkles, Tags, X, Zap } from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var htmlSlice = createSlice({
	name: "htmlStore",
	initialState: {
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
	},
	reducers: {
		changeLanguage: (state, action) => {
			state.language = action.payload;
		},
		changeHtmlCode: (state, action) => {
			state.htmlCode = action.payload;
		}
	}
});
const { changeLanguage, changeHtmlCode } = htmlSlice.actions;
var htmlSlice_default = htmlSlice.reducer;
const store = configureStore({ reducer: { htmlStore: htmlSlice_default } });
const htmlTagsDataDitiles = [
	{
		id: 1,
		name: "html",
		definition: "Defines the root of an HTML document",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ HTML à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦®à§‚à¦² à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<html>...</html>",
		codeExample: `<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`,
		about: `The <html> tag is the root element of an HTML page. /n
The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element. There can be only one <html> element in a document.

While HTML does not require authors to specify <html> element start and ending tags, it is important for authors to do so as it will allow them to specify the lang for the webpage. Providing a lang attribute with a valid BCP 47 language tag on the <html> element will help screen reading technology determine the proper language to announce. The identifying language tag should describe the language used by the majority of the content of the page. Without it, screen readers will typically default to the operating system's set language, which may cause mispronunciations.

Including a valid lang declaration on the <html> element also ensures that important metadata contained in the page's <head>, such as the page's <title>, are also announced properly.`,
		aboutBn: `<html> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ HTML à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦®à§‚à¦² à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¥¤
<html> HTML à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ HTML à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦®à§‚à¦²(à¦¶à§€à¦°à§à¦·- à¦¸à§à¦¤à¦°à§‡à¦° à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨) à¦ªà§à¦°à¦¤à¦¿à¦¨à¦¿à¦§à¦¿à¦¤à§à¦¬ à¦•à¦°à§‡, à¦¤à¦¾à¦‡ à¦à¦Ÿà¦¿à¦•à§‡ à¦®à§‚à¦² à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦“ à¦¬à¦²à¦¾ à¦¹à¦¯à¦¼à¥¤ à¦…à¦¨à§à¦¯à¦¾à¦¨à§à¦¯ à¦¸à¦®à¦¸à§à¦¤ à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ à¦…à¦¬à¦¶à§à¦¯à¦‡ à¦à¦‡ à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦¬à¦‚à¦¶à¦§à¦° à¦¹à¦¤à§‡ à¦¹à¦¬à§‡à¥¤ à¦à¦•à¦Ÿà¦¿ à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡ à¦¶à§à¦§à§à¦®à¦¾à¦¤à§à¦° à¦à¦•à¦Ÿà¦¿ < html > à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ à¦¥à¦¾à¦•à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¥¤

HTML-à¦ à¦²à§‡à¦–à¦•à¦¦à§‡à¦° <html> à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦¶à§à¦°à§ à¦à¦¬à¦‚ à¦¶à§‡à¦·à§‡à¦° à¦Ÿà§à¦¯à¦¾à¦— à¦¨à¦¿à¦°à§à¦¦à¦¿à¦·à§à¦Ÿ à¦•à¦°à¦¾à¦° à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨ à¦¨à§‡à¦‡, à¦¤à¦¬à§‡ à¦²à§‡à¦–à¦•à¦¦à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦Ÿà¦¿ à¦•à¦°à¦¾ à¦—à§à¦°à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£ à¦•à¦¾à¦°à¦£ à¦à¦Ÿà¦¿ à¦¤à¦¾à¦¦à§‡à¦° à¦“à¦¯à¦¼à§‡à¦¬à¦ªà§‡à¦œà§‡à¦° à¦œà¦¨à§à¦¯ lang à¦¨à¦¿à¦°à§à¦¦à¦¿à¦·à§à¦Ÿ à¦•à¦°à¦¤à§‡ à¦¸à¦¾à¦¹à¦¾à¦¯à§à¦¯ à¦•à¦°à¦¬à§‡à¥¤ <html> à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿà§‡ à¦à¦•à¦Ÿà¦¿ à¦¬à§ˆà¦§ BCP 47 à¦²à§à¦¯à¦¾à¦™à§à¦—à§à¦¯à¦¼à§‡à¦œ à¦Ÿà§à¦¯à¦¾à¦— à¦¸à¦¹ à¦à¦•à¦Ÿà¦¿ lang à¦…à§à¦¯à¦¾à¦Ÿà§à¦°à¦¿à¦¬à¦¿à¦‰à¦Ÿ à¦ªà§à¦°à¦¦à¦¾à¦¨ à¦•à¦°à¦²à§‡ à¦¸à§à¦•à§à¦°à¦¿à¦¨ à¦°à¦¿à¦¡à¦¿à¦‚ à¦ªà§à¦°à¦¯à§à¦•à§à¦¤à¦¿à¦•à§‡ à¦¸à¦ à¦¿à¦• à¦­à¦¾à¦·à¦¾ à¦˜à§‹à¦·à¦£à¦¾ à¦•à¦°à¦¤à§‡ à¦¸à¦¾à¦¹à¦¾à¦¯à§à¦¯ à¦•à¦°à¦¬à§‡à¥¤ à¦¶à¦¨à¦¾à¦•à§à¦¤à¦•à¦¾à¦°à§€ à¦­à¦¾à¦·à¦¾ à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦¬à§‡à¦¶à¦¿à¦°à¦­à¦¾à¦— à¦•à¦¨à§à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¦à§à¦¬à¦¾à¦°à¦¾ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦­à¦¾à¦·à¦¾ à¦¬à¦°à§à¦£à¦¨à¦¾ à¦•à¦°à¦¬à§‡à¥¤ à¦à¦Ÿà¦¿ à¦›à¦¾à¦¡à¦¼à¦¾, à¦¸à§à¦•à§à¦°à¦¿à¦¨ à¦°à¦¿à¦¡à¦¾à¦°à¦°à¦¾ à¦¸à¦¾à¦§à¦¾à¦°à¦£à¦¤ à¦…à¦ªà¦¾à¦°à§‡à¦Ÿà¦¿à¦‚ à¦¸à¦¿à¦¸à§à¦Ÿà§‡à¦®à§‡à¦° à¦¸à§‡à¦Ÿ à¦­à¦¾à¦·à¦¾ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à¦¬à§‡, à¦¯à¦¾ à¦­à§à¦² à¦‰à¦šà§à¦šà¦¾à¦°à¦£à§‡à¦° à¦•à¦¾à¦°à¦£ à¦¹à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¥¤

<html> à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿà§‡ à¦à¦•à¦Ÿà¦¿ à¦¬à§ˆà¦§ lang à¦˜à§‹à¦·à¦£à¦¾ à¦…à¦¨à§à¦¤à¦°à§à¦­à§à¦•à§à¦¤ à¦•à¦°à¦²à§‡ à¦ªà§ƒà¦·à§à¦ à¦¾à¦° <head> à¦ à¦¥à¦¾à¦•à¦¾ à¦—à§à¦°à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£ à¦®à§‡à¦Ÿà¦¾à¦¡à§‡à¦Ÿà¦¾, à¦¯à§‡à¦®à¦¨ à¦ªà§ƒà¦·à§à¦ à¦¾à¦° <title>, à¦¸à¦ à¦¿à¦•à¦­à¦¾à¦¬à§‡ à¦˜à§‹à¦·à¦£à¦¾ à¦•à¦°à¦¾ à¦¹à¦¬à§‡à¥¤`,
		useCase: "Every HTML page must have a single <html> tag.",
		useCaseBn: "à¦ªà§à¦°à¦¤à§à¦¯à§‡à¦•à¦Ÿà¦¿ HTML à¦ªà§ƒà¦·à§à¦ à¦¾à¦¯à¦¼ à¦à¦•à¦Ÿà¦¿ <html> à¦Ÿà§à¦¯à¦¾à¦— à¦¥à¦¾à¦•à¦¾ à¦†à¦¬à¦¶à§à¦¯à¦•à¥¤",
		active: true,
		category: "Document",
		attributes: [{
			name: "lang",
			description: "Specifies the language of the document",
			descriptionBn: "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦­à¦¾à¦·à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<html lang="en">...</html>`
		}]
	},
	{
		id: 2,
		name: "head",
		definition: "Contains metadata/information for the document",
		definitionBn: "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦œà¦¨à§à¦¯ à¦®à§‡à¦Ÿà¦¾à¦¡à§‡à¦Ÿà¦¾/à¦¤à¦¥à§à¦¯ à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<head>...</head>",
		codeExample: `<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <link rel="stylesheet" href="style.css">
</head>`,
		about: `The <head> element contains metadata and links to scripts or stylesheets.

The <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.

HTML metadata is data about the HTML document. Metadata is not displayed on the page.

Metadata typically define the document title, character set, styles, scripts, and other meta information.

The HTML <head> element is a container for the following elements: <title>, <style>, <meta>, <link>, <script>, and <base>.
        `,
		aboutBn: `<head> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦®à§‡à¦Ÿà¦¾à¦¡à§‡à¦Ÿà¦¾ à¦à¦¬à¦‚ à¦¸à§à¦•à§à¦°à¦¿à¦ªà§à¦Ÿ/à¦¸à§à¦Ÿà¦¾à¦‡à¦²à¦¶à§€à¦Ÿà§‡à¦° à¦²à¦¿à¦™à§à¦• à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤

<head> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦®à§‡à¦Ÿà¦¾à¦¡à§‡à¦Ÿà¦¾ (à¦¡à§‡à¦Ÿà¦¾ à¦¸à¦®à§à¦ªà¦°à§à¦•à§‡ à¦¤à¦¥à§à¦¯) à¦à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦§à¦¾à¦°à¦• à¦à¦¬à¦‚ <html> à¦Ÿà§à¦¯à¦¾à¦— à¦à¦¬à¦‚ <body> à¦Ÿà§à¦¯à¦¾à¦—à§‡à¦° à¦®à¦§à§à¦¯à§‡ à¦¸à§à¦¥à¦¾à¦ªà¦¨ à¦•à¦°à¦¾ à¦¹à¦¯à¦¼à¥¤

HTML à¦®à§‡à¦Ÿà¦¾à¦¡à§‡à¦Ÿà¦¾ à¦¹à¦² HTML à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿ à¦¸à¦®à§à¦ªà¦°à§à¦•à§‡ à¦¤à¦¥à§à¦¯à¥¤ à¦®à§‡à¦Ÿà¦¾à¦¡à§‡à¦Ÿà¦¾ à¦ªà§ƒà¦·à§à¦ à¦¾à¦¯à¦¼ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¿à¦¤ à¦¹à¦¯à¦¼ à¦¨à¦¾à¥¤

à¦®à§‡à¦Ÿà¦¾à¦¡à§‡à¦Ÿà¦¾ à¦¸à¦¾à¦§à¦¾à¦°à¦£à¦¤ à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦®, à¦…à¦•à§à¦·à¦° à¦¸à§‡à¦Ÿ, à¦¶à§ˆà¦²à§€, à¦¸à§à¦•à§à¦°à¦¿à¦ªà§à¦Ÿ à¦à¦¬à¦‚ à¦…à¦¨à§à¦¯à¦¾à¦¨à§à¦¯ à¦®à§‡à¦Ÿà¦¾ à¦¤à¦¥à§à¦¯ à¦¸à¦‚à¦œà§à¦žà¦¾à¦¯à¦¼à¦¿à¦¤ à¦•à¦°à§‡à¥¤

HTML <head> à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿ à¦¹à¦² à¦¨à¦¿à¦®à§à¦¨à¦²à¦¿à¦–à¦¿à¦¤ à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿà¦—à§à¦²à¦¿à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦•à¦¨à§à¦Ÿà§‡à¦‡à¦¨à¦¾à¦°: <title>, <style>, <meta>, <link>, <script>, à¦à¦¬à¦‚ <base>à¥¤
        `,
		useCase: "Add title, meta tags, CSS links, or JS scripts here. The HTML <head> element is a container for the following elements: <title>, <style>, <meta>, <link>, <script>, and <base>.",
		useCaseBn: "à¦Ÿà¦¾à¦‡à¦Ÿà§‡à¦², à¦®à§‡à¦Ÿà¦¾ à¦Ÿà§à¦¯à¦¾à¦—, CSS à¦²à¦¿à¦™à§à¦• à¦¬à¦¾ JS à¦¸à§à¦•à§à¦°à¦¿à¦ªà§à¦Ÿ à¦à¦–à¦¾à¦¨à§‡ à¦¯à§‹à¦— à¦•à¦°à§à¦¨à¥¤ HTML <head> à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿ à¦¹à¦² à¦¨à¦¿à¦®à§à¦¨à¦²à¦¿à¦–à¦¿à¦¤ à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿà¦—à§à¦²à¦¿à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦•à¦¨à§à¦Ÿà§‡à¦‡à¦¨à¦¾à¦°: <title>, <style>, <meta>, <link>, <script>, à¦à¦¬à¦‚ <base>",
		active: true,
		category: "Document",
		attributes: [{
			name: "charset",
			description: "Specifies the character encoding for the document",
			descriptionBn: "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦œà¦¨à§à¦¯ à¦…à¦•à§à¦·à¦° à¦à¦¨à¦•à§‹à¦¡à¦¿à¦‚ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<meta charset="UTF-8">`
		}]
	},
	{
		id: 3,
		name: "title",
		definition: "Sets the title of the document",
		definitionBn: "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<title>...</title>",
		codeExample: `<title>My Page</title>`,
		about: `The <title> element sets the name of the document displayed in the browser tab.

The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; HTML tags within the element, if any, are also treated as plain text.

The <title> element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

The <title> element is required in HTML documents!

The content of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.

The <title> element:

defines a title in the browser toolbar
provides a title for the page when it is added to favorites
displays a title for the page in search engine-results
        `,
		aboutBn: `<title> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡ à¦¯à¦¾ à¦¬à§à¦°à¦¾à¦‰à¦œà¦¾à¦°à§‡à¦° à¦Ÿà§à¦¯à¦¾à¦¬à§‡ à¦¦à§‡à¦–à¦¾à¦¨à§‹ à¦¹à¦¯à¦¼à¥¤

<title> HTML à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦¬à§à¦°à¦¾à¦‰à¦œà¦¾à¦°à§‡à¦° à¦Ÿà¦¾à¦‡à¦Ÿà§‡à¦² à¦¬à¦¾à¦°à§‡ à¦…à¦¥à¦¬à¦¾ à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦Ÿà§à¦¯à¦¾à¦¬à§‡ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¿à¦¤ à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤ à¦à¦¤à§‡ à¦•à§‡à¦¬à¦² à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦¥à¦¾à¦•à§‡; à¦¯à¦¦à¦¿ à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦®à¦§à§à¦¯à§‡ HTML à¦Ÿà§à¦¯à¦¾à¦— à¦¥à¦¾à¦•à§‡, à¦¤à¦¬à§‡ à¦¤à¦¾à¦“ à¦ªà§à¦²à§‡à¦‡à¦¨ à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦¹à¦¿à¦¸à§‡à¦¬à§‡ à¦¬à¦¿à¦¬à§‡à¦šà¦¿à¦¤ à¦¹à¦¯à¦¼à¥¤

<title> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤ à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦®à¦Ÿà¦¿ à¦•à§‡à¦¬à¦² à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ-à¦à¦° à¦œà¦¨à§à¦¯ à¦¹à¦¤à§‡ à¦¹à¦¬à§‡ à¦à¦¬à¦‚ à¦à¦Ÿà¦¿ à¦¬à§à¦°à¦¾à¦‰à¦œà¦¾à¦°à§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¬à¦¾à¦°à§‡ à¦…à¦¥à¦¬à¦¾ à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦Ÿà§à¦¯à¦¾à¦¬à§‡ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¿à¦¤ à¦¹à¦¬à§‡à¥¤

<title> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ HTML à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡ à¦ªà§à¦°à¦¯à¦¼à§‹à¦œà¦¨!

à¦¸à¦¾à¦°à§à¦š à¦‡à¦žà§à¦œà¦¿à¦¨ à¦…à¦ªà§à¦Ÿà¦¿à¦®à¦¾à¦‡à¦œà§‡à¦¶à¦¨ (SEO) à¦à¦° à¦œà¦¨à§à¦¯ à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦®à§‡à¦° à¦¬à¦¿à¦·à¦¯à¦¼à¦¬à¦¸à§à¦¤à§ à¦–à§à¦¬à¦‡ à¦—à§à¦°à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£! à¦¸à¦¾à¦°à§à¦š à¦‡à¦žà§à¦œà¦¿à¦¨ à¦…à§à¦¯à¦¾à¦²à¦—à¦°à¦¿à¦¦à¦®à¦—à§à¦²à¦¿ à¦…à¦¨à§à¦¸à¦¨à§à¦§à¦¾à¦¨ à¦«à¦²à¦¾à¦«à¦²à§‡ à¦ªà§ƒà¦·à§à¦ à¦¾à¦—à§à¦²à¦¿ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦­à§à¦•à§à¦¤ à¦•à¦°à¦¾à¦° à¦¸à¦®à¦¯à¦¼ à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦®à¦Ÿà¦¿ à¦•à§à¦°à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§‡à¥¤

<title> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨:

à¦¬à§à¦°à¦¾à¦‰à¦œà¦¾à¦° à¦Ÿà§à¦²à¦¬à¦¾à¦°à§‡ à¦à¦•à¦Ÿà¦¿ à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¸à¦‚à¦œà§à¦žà¦¾à¦¯à¦¼à¦¿à¦¤ à¦•à¦°à§‡
à¦ªà§ƒà¦·à§à¦ à¦¾à¦Ÿà¦¿ à¦ªà¦›à¦¨à§à¦¦à¦¸à¦‡ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦¯à¦¼ à¦¯à§à¦•à§à¦¤ à¦•à¦°à¦¾à¦° à¦¸à¦®à¦¯à¦¼ à¦à¦•à¦Ÿà¦¿ à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦ªà§à¦°à¦¦à¦¾à¦¨ à¦•à¦°à§‡
à¦¸à¦¾à¦°à§à¦š à¦‡à¦žà§à¦œà¦¿à¦¨-à¦«à¦²à¦¾à¦«à¦²à¦—à§à¦²à¦¿à¦¤à§‡ à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¨ à¦•à¦°à§‡
`,
		useCase: "Always include a descriptive title for SEO and usability.",
		useCaseBn: "SEO à¦à¦¬à¦‚ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à¦¯à§‹à¦—à§à¦¯à¦¤à¦¾à¦° à¦œà¦¨à§à¦¯ à¦¸à¦°à§à¦¬à¦¦à¦¾ à¦à¦•à¦Ÿà¦¿ à¦¬à¦°à§à¦£à¦¨à¦¾à¦®à§‚à¦²à¦• à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦…à¦¨à§à¦¤à¦°à§à¦­à§à¦•à§à¦¤ à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Meta",
		attributes: []
	},
	{
		id: 4,
		name: "body",
		definition: "Defines the document's body",
		definitionBn: "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦¶à¦°à§€à¦° à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<body>...</body>",
		codeExample: `<body>
  <h1>Welcome</h1>
  <p>This is a paragraph.</p>
</body>`,
		about: "The <body> element contains everything that is visible to the user.",
		aboutBn: "<body> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à¦•à¦¾à¦°à§€à¦° à¦•à¦¾à¦›à§‡ à¦¦à§ƒà¦¶à§à¦¯à¦®à¦¾à¦¨ à¦¸à¦¬à¦•à¦¿à¦›à§ à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		useCase: "Put all visible HTML elements inside <body>.",
		useCaseBn: "à¦¦à§ƒà¦¶à§à¦¯à¦®à¦¾à¦¨ à¦¸à¦•à¦² HTML à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ <body> à¦à¦° à¦­à¦¿à¦¤à¦°à§‡ à¦°à¦¾à¦–à§à¦¨à¥¤",
		active: true,
		category: "Document",
		attributes: []
	},
	{
		id: 5.1,
		name: "h1",
		definition: "Defines HTML headings",
		definitionBn: "HTML à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<h1>...</h1>",
		codeExample: `<h1>Welcome to My Website</h1>`,
		about: "The <h1> tag defines the most important heading.",
		aboutBn: "<h1> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦¸à¦¬à¦šà§‡à¦¯à¦¼à§‡ à¦—à§à¦°à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£ à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		useCase: "Use only one <h1> per page for SEO best practices.",
		useCaseBn: "SEO à¦à¦° à¦œà¦¨à§à¦¯ à¦ªà§à¦°à¦¤à¦¿ à¦ªà§ƒà¦·à§à¦ à¦¾à¦¯à¦¼ à¦•à§‡à¦¬à¦² à¦à¦•à¦Ÿà¦¿ <h1> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Text",
		attributes: [{
			name: "class",
			description: "Specifies one or more class names for the element",
			descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<h1 class="main-title">Welcome</h1>`
		}, {
			name: "id",
			description: "Specifies a unique id for the element",
			descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<h1 id="header">Welcome</h1>`
		}]
	},
	{
		id: 5.2,
		name: "h2",
		definition: "Defines the second-level heading in HTML.",
		definitionBn: "HTML-à¦ à¦¦à§à¦¬à¦¿à¦¤à§€à¦¯à¦¼ à¦¸à§à¦¤à¦°à§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		syntax: "<h2>...</h2>",
		codeExample: `<h2>Welcome to My Website</h2>`,
		about: "The <h2> tag defines a second-level heading. It is typically used to represent subheadings that follow an <h1> tag.",
		aboutBn: "<h2> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦¦à§à¦¬à¦¿à¦¤à§€à¦¯à¦¼ à¦¸à§à¦¤à¦°à§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤ à¦à¦Ÿà¦¿ à¦¸à¦¾à¦§à¦¾à¦°à¦£à¦¤ <h1> à¦Ÿà§à¦¯à¦¾à¦—à§‡à¦° à¦ªà¦°à¦¬à¦°à§à¦¤à§€ à¦¸à¦¾à¦¬à¦¹à§‡à¦¡à¦¿à¦‚ à¦¹à¦¿à¦¸à§‡à¦¬à§‡ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à¥¤",
		useCase: "Use the <h2> tag for subheadings to maintain a clear content hierarchy and improve SEO structure.",
		useCaseBn: "à¦¸à§à¦¸à§à¦ªà¦·à§à¦Ÿ à¦¬à¦¿à¦·à¦¯à¦¼à¦¬à¦¸à§à¦¤à§à¦° à¦•à¦¾à¦ à¦¾à¦®à§‹ à¦¬à¦œà¦¾à¦¯à¦¼ à¦°à¦¾à¦–à¦¤à§‡ à¦à¦¬à¦‚ SEO à¦‰à¦¨à§à¦¨à¦¤ à¦•à¦°à¦¤à§‡ à¦¸à¦¾à¦¬à¦¹à§‡à¦¡à¦¿à¦‚à¦¯à¦¼à§‡à¦° à¦œà¦¨à§à¦¯ <h2> à¦Ÿà§à¦¯à¦¾à¦— à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Text",
		attributes: [
			{
				name: "class",
				description: "Specifies one or more class names for the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
				example: `<h2 class="main-title">Welcome</h2>`
			},
			{
				name: "id",
				description: "Specifies a unique id for the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
				example: `<h2 id="header">Welcome</h2>`
			},
			{
				name: "style",
				description: "Adds inline CSS styling to the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡ à¦‡à¦¨à¦²à¦¾à¦‡à¦¨ CSS à¦¸à§à¦Ÿà¦¾à¦‡à¦² à¦ªà§à¦°à¦¯à¦¼à§‹à¦— à¦•à¦°à§‡à¥¤",
				example: `<h2 style="color: blue;">Welcome</h2>`
			},
			{
				name: "title",
				description: "Adds extra information about the element (shown as a tooltip on hover).",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ à¦¸à¦®à§à¦ªà¦°à§à¦•à§‡ à¦…à¦¤à¦¿à¦°à¦¿à¦•à§à¦¤ à¦¤à¦¥à§à¦¯ à¦¯à§‹à¦— à¦•à¦°à§‡ (à¦®à¦¾à¦‰à¦¸ à¦°à¦¾à¦–à¦²à§‡ à¦Ÿà§à¦²à¦Ÿà¦¿à¦ª à¦¹à¦¿à¦¸à¦¾à¦¬à§‡ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¿à¦¤ à¦¹à¦¯à¦¼)à¥¤",
				example: `<h2 title="Main Heading">Welcome</h2>`
			}
		]
	},
	{
		id: 5.3,
		name: "h3",
		definition: "Defines a third-level heading in HTML.",
		definitionBn: "HTML-à¦ à¦¤à§ƒà¦¤à§€à¦¯à¦¼ à¦¸à§à¦¤à¦°à§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		syntax: "<h3>...</h3>",
		codeExample: `<h3>About Us</h3>`,
		about: "The <h3> tag represents a third-level heading in an HTML document. It is used to organize content under <h2> subheadings and helps create a clear content hierarchy.",
		aboutBn: "<h3> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ HTML à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡ à¦¤à§ƒà¦¤à§€à¦¯à¦¼ à¦¸à§à¦¤à¦°à§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡à¥¤ à¦à¦Ÿà¦¿ à¦¸à¦¾à¦§à¦¾à¦°à¦£à¦¤ <h2> à¦¸à¦¾à¦¬à¦¹à§‡à¦¡à¦¿à¦‚-à¦à¦° à¦…à¦§à§€à¦¨à§‡ à¦¬à¦¿à¦·à¦¯à¦¼à¦¬à¦¸à§à¦¤à§ à¦¸à¦‚à¦—à¦ à¦¿à¦¤ à¦•à¦°à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼ à¦à¦¬à¦‚ à¦¸à§à¦ªà¦·à§à¦Ÿ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦•à¦¾à¦ à¦¾à¦®à§‹ à¦¤à§ˆà¦°à¦¿ à¦•à¦°à¦¤à§‡ à¦¸à¦¹à¦¾à¦¯à¦¼à¦¤à¦¾ à¦•à¦°à§‡à¥¤",
		useCase: "Use <h3> tags for sections under <h2> headings to maintain a logical structure and help search engines understand content relationships.",
		useCaseBn: "<h2> à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦®à§‡à¦° à¦…à¦§à§€à¦¨à§‡ <h3> à¦Ÿà§à¦¯à¦¾à¦— à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨ à¦¯à¦¾à¦¤à§‡ à¦¯à§à¦•à§à¦¤à¦¿à¦¸à¦™à§à¦—à¦¤ à¦•à¦¾à¦ à¦¾à¦®à§‹ à¦¬à¦œà¦¾à¦¯à¦¼ à¦¥à¦¾à¦•à§‡ à¦à¦¬à¦‚ à¦¸à¦¾à¦°à§à¦š à¦‡à¦žà§à¦œà¦¿à¦¨ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿà§‡à¦° à¦¸à¦®à§à¦ªà¦°à§à¦• à¦¬à§à¦à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¥¤",
		active: true,
		category: "Text",
		attributes: [
			{
				name: "class",
				description: "Specifies one or more class names for the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
				example: `<h3 class="sub-heading">About Us</h3>`
			},
			{
				name: "id",
				description: "Specifies a unique id for the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
				example: `<h3 id="about">About Us</h3>`
			},
			{
				name: "style",
				description: "Adds inline CSS styling to the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡ à¦‡à¦¨à¦²à¦¾à¦‡à¦¨ CSS à¦¸à§à¦Ÿà¦¾à¦‡à¦² à¦ªà§à¦°à¦¯à¦¼à§‹à¦— à¦•à¦°à§‡à¥¤",
				example: `<h3 style="color: green;">About Us</h3>`
			},
			{
				name: "title",
				description: "Adds extra information about the element (shown as a tooltip on hover).",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ à¦¸à¦®à§à¦ªà¦°à§à¦•à§‡ à¦…à¦¤à¦¿à¦°à¦¿à¦•à§à¦¤ à¦¤à¦¥à§à¦¯ à¦¯à§‹à¦— à¦•à¦°à§‡ (à¦®à¦¾à¦‰à¦¸ à¦°à¦¾à¦–à¦²à§‡ à¦Ÿà§à¦²à¦Ÿà¦¿à¦ª à¦¹à¦¿à¦¸à¦¾à¦¬à§‡ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¿à¦¤ à¦¹à¦¯à¦¼)à¥¤",
				example: `<h3 title="Section Heading">About Us</h3>`
			}
		]
	},
	{
		id: 5.4,
		name: "h4",
		definition: "Defines a fourth-level heading in HTML.",
		definitionBn: "HTML-à¦ à¦šà¦¤à§à¦°à§à¦¥ à¦¸à§à¦¤à¦°à§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		syntax: "<h4>...</h4>",
		codeExample: `<h4>Frontend Technologies</h4>`,
		about: "The <h4> tag represents a fourth-level heading in an HTML document. It is used for subsections under <h3> headings, keeping the document structure organized and readable.",
		aboutBn: "<h4> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ HTML à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡ à¦šà¦¤à§à¦°à§à¦¥ à¦¸à§à¦¤à¦°à§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡à¥¤ à¦à¦Ÿà¦¿ à¦¸à¦¾à¦§à¦¾à¦°à¦£à¦¤ <h3> à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦®à§‡à¦° à¦…à¦§à§€à¦¨à§‡ à¦‰à¦ª-à¦¬à¦¿à¦­à¦¾à¦—à§‡à¦° à¦œà¦¨à§à¦¯ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼ à¦¯à¦¾à¦¤à§‡ à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà¦Ÿà¦¿ à¦¸à¦‚à¦—à¦ à¦¿à¦¤ à¦¥à¦¾à¦•à§‡à¥¤",
		useCase: "Use <h4> tags for smaller subsections under <h3> to maintain logical content hierarchy.",
		useCaseBn: "à¦¬à¦¿à¦·à¦¯à¦¼à¦¬à¦¸à§à¦¤à§à¦° à¦•à¦¾à¦ à¦¾à¦®à§‹ à¦¯à§Œà¦•à§à¦¤à¦¿à¦• à¦°à¦¾à¦–à¦¤à§‡ <h3> à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦®à§‡à¦° à¦…à¦§à§€à¦¨à§‡ à¦›à§‹à¦Ÿ à¦‰à¦ª-à¦¬à¦¿à¦­à¦¾à¦—à§‡à¦° à¦œà¦¨à§à¦¯ <h4> à¦Ÿà§à¦¯à¦¾à¦— à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Text",
		attributes: [
			{
				name: "class",
				description: "Specifies one or more class names for the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
				example: `<h4 class="topic-title">Frontend Technologies</h4>`
			},
			{
				name: "id",
				description: "Specifies a unique id for the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
				example: `<h4 id="frontend">Frontend Technologies</h4>`
			},
			{
				name: "style",
				description: "Adds inline CSS styling to the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡ à¦‡à¦¨à¦²à¦¾à¦‡à¦¨ CSS à¦¸à§à¦Ÿà¦¾à¦‡à¦² à¦ªà§à¦°à¦¯à¦¼à§‹à¦— à¦•à¦°à§‡à¥¤",
				example: `<h4 style="color: #0A74FF;">Frontend Technologies</h4>`
			},
			{
				name: "title",
				description: "Adds extra information about the element (shown as a tooltip on hover).",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ à¦¸à¦®à§à¦ªà¦°à§à¦•à§‡ à¦…à¦¤à¦¿à¦°à¦¿à¦•à§à¦¤ à¦¤à¦¥à§à¦¯ à¦¯à§‹à¦— à¦•à¦°à§‡ (à¦®à¦¾à¦‰à¦¸ à¦°à¦¾à¦–à¦²à§‡ à¦Ÿà§à¦²à¦Ÿà¦¿à¦ª à¦¹à¦¿à¦¸à¦¾à¦¬à§‡ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¿à¦¤ à¦¹à¦¯à¦¼)à¥¤",
				example: `<h4 title="Subsection Heading">Frontend Technologies</h4>`
			}
		]
	},
	{
		id: 5.5,
		name: "h5",
		definition: "Defines a fifth-level heading in HTML.",
		definitionBn: "HTML-à¦ à¦ªà¦žà§à¦šà¦® à¦¸à§à¦¤à¦°à§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		syntax: "<h5>...</h5>",
		codeExample: `<h5>JavaScript Frameworks</h5>`,
		about: "The <h5> tag represents a fifth-level heading in an HTML document. It is often used for even smaller sections under <h4> headings.",
		aboutBn: "<h5> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ HTML à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡ à¦ªà¦žà§à¦šà¦® à¦¸à§à¦¤à¦°à§‡à¦° à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡à¥¤ à¦à¦Ÿà¦¿ à¦¸à¦¾à¦§à¦¾à¦°à¦£à¦¤ <h4> à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦®à§‡à¦° à¦…à¦§à§€à¦¨à§‡ à¦†à¦°à¦“ à¦›à§‹à¦Ÿ à¦¬à¦¿à¦­à¦¾à¦—à¦—à§à¦²à¦¿à¦° à¦œà¦¨à§à¦¯ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à¥¤",
		useCase: "Use <h5> for minor subsections or side notes to maintain a proper document structure.",
		useCaseBn: "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦•à¦¾à¦ à¦¾à¦®à§‹ à¦¬à¦œà¦¾à¦¯à¦¼ à¦°à¦¾à¦–à¦¤à§‡ à¦›à§‹à¦Ÿ à¦‰à¦ª-à¦¬à¦¿à¦­à¦¾à¦— à¦¬à¦¾ à¦¸à¦¾à¦‡à¦¡ à¦¨à§‹à¦Ÿà§‡à¦° à¦œà¦¨à§à¦¯ <h5> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Text",
		attributes: [
			{
				name: "class",
				description: "Specifies one or more class names for the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
				example: `<h5 class="framework-heading">JavaScript Frameworks</h5>`
			},
			{
				name: "id",
				description: "Specifies a unique id for the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
				example: `<h5 id="js-frameworks">JavaScript Frameworks</h5>`
			},
			{
				name: "style",
				description: "Adds inline CSS styling to the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡ à¦‡à¦¨à¦²à¦¾à¦‡à¦¨ CSS à¦¸à§à¦Ÿà¦¾à¦‡à¦² à¦ªà§à¦°à¦¯à¦¼à§‹à¦— à¦•à¦°à§‡à¥¤",
				example: `<h5 style="font-weight:600;">JavaScript Frameworks</h5>`
			},
			{
				name: "title",
				description: "Adds extra information about the element (shown as a tooltip on hover).",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ à¦¸à¦®à§à¦ªà¦°à§à¦•à§‡ à¦…à¦¤à¦¿à¦°à¦¿à¦•à§à¦¤ à¦¤à¦¥à§à¦¯ à¦¯à§‹à¦— à¦•à¦°à§‡ (à¦®à¦¾à¦‰à¦¸ à¦°à¦¾à¦–à¦²à§‡ à¦Ÿà§à¦²à¦Ÿà¦¿à¦ª à¦¹à¦¿à¦¸à¦¾à¦¬à§‡ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¿à¦¤ à¦¹à¦¯à¦¼)à¥¤",
				example: `<h5 title="Minor Heading">JavaScript Frameworks</h5>`
			}
		]
	},
	{
		id: 5.6,
		name: "h6",
		definition: "Defines the smallest or least important heading in HTML.",
		definitionBn: "HTML-à¦ à¦¸à¦¬à¦šà§‡à¦¯à¦¼à§‡ à¦›à§‹à¦Ÿ à¦¬à¦¾ à¦•à¦® à¦—à§à¦°à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£ à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		syntax: "<h6>...</h6>",
		codeExample: `<h6>Last Updated: 2025</h6>`,
		about: "The <h6> tag defines the least important heading in an HTML document. It is used for minor subheadings or small details within a section.",
		aboutBn: "<h6> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ HTML à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡ à¦¸à¦¬à¦šà§‡à¦¯à¦¼à§‡ à¦•à¦® à¦—à§à¦°à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£ à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡à¥¤ à¦à¦Ÿà¦¿ à¦¸à¦¾à¦§à¦¾à¦°à¦£à¦¤ à¦›à§‹à¦Ÿ à¦¸à¦¾à¦¬à¦¹à§‡à¦¡à¦¿à¦‚ à¦¬à¦¾ à¦…à¦¤à¦¿à¦°à¦¿à¦•à§à¦¤ à¦¤à¦¥à§à¦¯ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à¥¤",
		useCase: "Use <h6> sparingly for small notes or extra details at the end of a section.",
		useCaseBn: "à¦•à§‹à¦¨à§‹ à¦¸à§‡à¦•à¦¶à¦¨à§‡à¦° à¦¶à§‡à¦·à§‡ à¦›à§‹à¦Ÿ à¦¨à§‹à¦Ÿ à¦¬à¦¾ à¦…à¦¤à¦¿à¦°à¦¿à¦•à§à¦¤ à¦¤à¦¥à§à¦¯ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦¸à§€à¦®à¦¿à¦¤à¦­à¦¾à¦¬à§‡ <h6> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Text",
		attributes: [
			{
				name: "class",
				description: "Specifies one or more class names for the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
				example: `<h6 class="note-heading">Last Updated: 2025</h6>`
			},
			{
				name: "id",
				description: "Specifies a unique id for the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
				example: `<h6 id="last-update">Last Updated: 2025</h6>`
			},
			{
				name: "style",
				description: "Adds inline CSS styling to the element.",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡ à¦‡à¦¨à¦²à¦¾à¦‡à¦¨ CSS à¦¸à§à¦Ÿà¦¾à¦‡à¦² à¦ªà§à¦°à¦¯à¦¼à§‹à¦— à¦•à¦°à§‡à¥¤",
				example: `<h6 style="color: gray;">Last Updated: 2025</h6>`
			},
			{
				name: "title",
				description: "Adds extra information about the element (shown as a tooltip on hover).",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ à¦¸à¦®à§à¦ªà¦°à§à¦•à§‡ à¦…à¦¤à¦¿à¦°à¦¿à¦•à§à¦¤ à¦¤à¦¥à§à¦¯ à¦¯à§‹à¦— à¦•à¦°à§‡ (à¦®à¦¾à¦‰à¦¸ à¦°à¦¾à¦–à¦²à§‡ à¦Ÿà§à¦²à¦Ÿà¦¿à¦ª à¦¹à¦¿à¦¸à¦¾à¦¬à§‡ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¿à¦¤ à¦¹à¦¯à¦¼)à¥¤",
				example: `<h6 title="Footer Note">Last Updated: 2025</h6>`
			}
		]
	},
	{
		id: 6,
		name: "p",
		definition: "Defines a paragraph",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à§à¦šà§à¦›à§‡à¦¦ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<p>...</p>",
		codeExample: `<p>This is a paragraph.</p>`,
		about: "The <p> tag is used to define paragraphs of text.",
		aboutBn: "<p> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦ªà¦¾à¦ à§à¦¯à§‡à¦° à¦…à¦¨à§à¦šà§à¦›à§‡à¦¦ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à¥¤",
		useCase: "Wrap text content in paragraphs for readability.",
		useCaseBn: "à¦ªà¦¾à¦ à§à¦¯ à¦•à¦¨à§à¦Ÿà§‡à¦¨à§à¦Ÿ à¦ªà§à¦¯à¦¾à¦°à¦¾à¦—à§à¦°à¦¾à¦«à§‡ à¦°à¦¾à¦–à§à¦¨ à¦ªà¦¾à¦ à¦¯à§‹à¦—à§à¦¯à¦¤à¦¾à¦° à¦œà¦¨à§à¦¯à¥¤",
		active: true,
		category: "Text",
		attributes: [{
			name: "class",
			description: "Specifies one or more class names for the element",
			descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<p class="intro-text">This is a paragraph.</p>`
		}, {
			name: "id",
			description: "Specifies a unique id for the element",
			descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<p id="first-paragraph">This is a paragraph.</p>`
		}]
	},
	{
		id: 7,
		name: "a",
		definition: "Defines a hyperlink",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦¹à¦¾à¦‡à¦ªà¦¾à¦°à¦²à¦¿à¦™à§à¦• à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<a href='url'>...</a>",
		codeExample: `<a href="https://www.example.com">Visit Example</a>`,
		about: "The <a> tag defines a hyperlink, which is used to link from one page to another.",
		aboutBn: "<a> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ à¦¹à¦¾à¦‡à¦ªà¦¾à¦°à¦²à¦¿à¦™à§à¦• à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡, à¦¯à¦¾ à¦à¦•à¦Ÿà¦¿ à¦ªà§ƒà¦·à§à¦ à¦¾ à¦¥à§‡à¦•à§‡ à¦…à¦¨à§à¦¯ à¦ªà§ƒà¦·à§à¦ à¦¾à¦¯à¦¼ à¦¸à¦‚à¦¯à§‹à¦— à¦•à¦°à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à¥¤",
		useCase: "Use <a> tags to create links to other pages or resources.",
		useCaseBn: "à¦…à¦¨à§à¦¯à¦¾à¦¨à§à¦¯ à¦ªà§ƒà¦·à§à¦ à¦¾ à¦¬à¦¾ à¦°à¦¿à¦¸à§‹à¦°à§à¦¸à§‡ à¦²à¦¿à¦™à§à¦• à¦¤à§ˆà¦°à¦¿ à¦•à¦°à¦¤à§‡ <a> à¦Ÿà§à¦¯à¦¾à¦— à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Link",
		attributes: [{
			name: "href",
			description: "Specifies the URL of the page the link goes to",
			descriptionBn: "à¦¯à§‡ à¦ªà§ƒà¦·à§à¦ à¦¾à¦¯à¦¼ à¦²à¦¿à¦™à§à¦•à¦Ÿà¦¿ à¦¯à¦¾à¦¬à§‡ à¦¤à¦¾à¦° URL à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<a href="https://www.example.com">Visit Example</a>`
		}, {
			name: "target",
			description: "Specifies where to open the linked document",
			descriptionBn: "à¦²à¦¿à¦™à§à¦• à¦•à¦°à¦¾ à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà¦Ÿà¦¿ à¦•à§‹à¦¥à¦¾à¦¯à¦¼ à¦–à§à¦²à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<a href="https://www.example.com" target="_blank">Visit Example</a>`
		}]
	},
	{
		id: 9,
		name: "img",
		definition: "Defines an image",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦šà¦¿à¦¤à§à¦° à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<img src='url' alt='description'>",
		codeExample: `<img src="image.jpg" alt="Description of image">`,
		about: "The <img> tag is used to embed images in documents.",
		aboutBn: "<img> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡ à¦šà¦¿à¦¤à§à¦° à¦à¦®à§à¦¬à§‡à¦¡ à¦•à¦°à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à¥¤",
		useCase: "Use <img> tags to display images on your webpage.",
		useCaseBn: "à¦†à¦ªà¦¨à¦¾à¦° à¦“à¦¯à¦¼à§‡à¦¬à¦ªà§ƒà¦·à§à¦ à¦¾à¦¯à¦¼ à¦šà¦¿à¦¤à§à¦° à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¨ à¦•à¦°à¦¤à§‡ <img> à¦Ÿà§à¦¯à¦¾à¦— à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Media",
		attributes: [
			{
				name: "src",
				description: "Specifies the path to the image",
				descriptionBn: "à¦šà¦¿à¦¤à§à¦°à§‡à¦° à¦ªà¦¥ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<img src="image.jpg" alt="Description of image">`
			},
			{
				name: "alt",
				description: "Specifies alternative text for the image",
				descriptionBn: "à¦šà¦¿à¦¤à§à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦¬à¦¿à¦•à¦²à§à¦ª à¦ªà¦¾à¦ à§à¦¯ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<img src="image.jpg" alt="Description of image">`
			},
			{
				name: "width",
				description: "Specifies the width of the image",
				descriptionBn: "à¦šà¦¿à¦¤à§à¦°à§‡à¦° à¦ªà§à¦°à¦¸à§à¦¥ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<img src="image.jpg" alt="Description of image" width="500">`
			},
			{
				name: "height",
				description: "Specifies the height of the image",
				descriptionBn: "à¦šà¦¿à¦¤à§à¦°à§‡à¦° à¦‰à¦šà§à¦šà¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<img src="image.jpg" alt="Description of image" height="300">`
			},
			{
				name: "loading",
				description: "Specifies whether a browser should load an image immediately or defer loading until some conditions are met",
				descriptionBn: "à¦à¦•à¦Ÿà¦¿ à¦¬à§à¦°à¦¾à¦‰à¦œà¦¾à¦° à¦šà¦¿à¦¤à§à¦°à¦Ÿà¦¿ à¦…à¦¬à¦¿à¦²à¦®à§à¦¬à§‡ à¦²à§‹à¦¡ à¦•à¦°à¦¬à§‡ à¦•à¦¿à¦¨à¦¾ à¦¬à¦¾ à¦•à¦¿à¦›à§ à¦¶à¦°à§à¦¤ à¦ªà§‚à¦°à§à¦£ à¦¨à¦¾ à¦¹à¦“à¦¯à¦¼à¦¾ à¦ªà¦°à§à¦¯à¦¨à§à¦¤ à¦²à§‹à¦¡à¦¿à¦‚ à¦¸à§à¦¥à¦—à¦¿à¦¤ à¦°à¦¾à¦–à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<img src="image.jpg" alt="Description of image" loading="lazy">`
			},
			{
				name: "srcset",
				description: "Specifies a list of image files to use in different situations",
				descriptionBn: "à¦¬à¦¿à¦­à¦¿à¦¨à§à¦¨ à¦ªà¦°à¦¿à¦¸à§à¦¥à¦¿à¦¤à¦¿à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦šà¦¿à¦¤à§à¦° à¦«à¦¾à¦‡à¦²à§‡à¦° à¦à¦•à¦Ÿà¦¿ à¦¤à¦¾à¦²à¦¿à¦•à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<img src="image.jpg" alt="Description of image" srcset="image-500.jpg 500w, image-1000.jpg 1000w">`
			},
			{
				name: "sizes",
				description: "Specifies image sizes for different page layouts",
				descriptionBn: "à¦¬à¦¿à¦­à¦¿à¦¨à§à¦¨ à¦ªà§ƒà¦·à§à¦ à¦¾ à¦¬à¦¿à¦¨à§à¦¯à¦¾à¦¸à§‡à¦° à¦œà¦¨à§à¦¯ à¦šà¦¿à¦¤à§à¦° à¦†à¦•à¦¾à¦° à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<img src="image.jpg" alt="Description of image" sizes="(max-width: 600px) 100vw, 50vw">`
			},
			{
				name: "usemap",
				description: "Specifies an image as a client-side image map",
				descriptionBn: "à¦à¦•à¦Ÿà¦¿ à¦šà¦¿à¦¤à§à¦° à¦•à§à¦²à¦¾à¦¯à¦¼à§‡à¦¨à§à¦Ÿ-à¦¸à¦¾à¦‡à¦¡ à¦šà¦¿à¦¤à§à¦° à¦®à¦¾à¦¨à¦šà¦¿à¦¤à§à¦° à¦¹à¦¿à¦¸à¦¾à¦¬à§‡ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<img src="image.jpg" alt="Description of image" usemap="#map">`
			},
			{
				name: "ismap",
				description: "Specifies an image as a server-side image map",
				descriptionBn: "à¦à¦•à¦Ÿà¦¿ à¦šà¦¿à¦¤à§à¦° à¦¸à¦¾à¦°à§à¦­à¦¾à¦°-à¦¸à¦¾à¦‡à¦¡ à¦šà¦¿à¦¤à§à¦° à¦®à¦¾à¦¨à¦šà¦¿à¦¤à§à¦° à¦¹à¦¿à¦¸à¦¾à¦¬à§‡ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<img src="image.jpg" alt="Description of image" ismap>`
			},
			{
				name: "referrerpolicy",
				description: "Specifies which referrer information to use when fetching the image",
				descriptionBn: "à¦šà¦¿à¦¤à§à¦°à¦Ÿà¦¿ à¦†à¦¨à¦¤à§‡ à¦¸à¦®à¦¯à¦¼ à¦•à§‹à¦¨ à¦°à§‡à¦«à¦¾à¦°à¦¾à¦° à¦¤à¦¥à§à¦¯ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à¦¤à§‡ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<img src="image.jpg" alt="Description of image" referrerpolicy="no-referrer">`
			}
		]
	},
	{
		id: 10,
		name: "form",
		definition: "Defines an HTML form for user input",
		definitionBn: "à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à¦•à¦¾à¦°à§€à¦° à¦‡à¦¨à¦ªà§à¦Ÿà§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ HTML à¦«à¦°à§à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<form>...</form>",
		codeExample: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>`,
		about: "The <form> tag is used to collect user input.",
		aboutBn: "<form> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à¦•à¦¾à¦°à§€à¦° à¦‡à¦¨à¦ªà§à¦Ÿ à¦¸à¦‚à¦—à§à¦°à¦¹ à¦•à¦°à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à¥¤",
		useCase: "Use <form> tags to create forms for user data submission.",
		useCaseBn: "à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à¦•à¦¾à¦°à§€à¦° à¦¡à§‡à¦Ÿà¦¾ à¦œà¦®à¦¾ à¦¦à§‡à¦“à¦¯à¦¼à¦¾à¦° à¦œà¦¨à§à¦¯ <form> à¦Ÿà§à¦¯à¦¾à¦— à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: [
			{
				name: "action",
				description: "Specifies where to send the form data when the form is submitted",
				descriptionBn: "à¦«à¦°à§à¦® à¦œà¦®à¦¾ à¦¦à§‡à¦“à¦¯à¦¼à¦¾à¦° à¦¸à¦®à¦¯à¦¼ à¦«à¦°à§à¦® à¦¡à§‡à¦Ÿà¦¾ à¦•à§‹à¦¥à¦¾à¦¯à¦¼ à¦ªà¦¾à¦ à¦¾à¦¤à§‡ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<form action="/submit" method="POST">...</form>`
			},
			{
				name: "method",
				description: "Specifies the HTTP method to use when sending form data",
				descriptionBn: "à¦«à¦°à§à¦® à¦¡à§‡à¦Ÿà¦¾ à¦ªà¦¾à¦ à¦¾à¦¨à§‹à¦° à¦¸à¦®à¦¯à¦¼ HTTP à¦ªà¦¦à§à¦§à¦¤à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<form action="/submit" method="POST">...</form>`
			},
			{
				name: "enctype",
				description: "Specifies how the form data should be encoded when submitting it to the server",
				descriptionBn: "à¦«à¦°à§à¦® à¦¡à§‡à¦Ÿà¦¾ à¦¸à¦¾à¦°à§à¦­à¦¾à¦°à§‡ à¦œà¦®à¦¾ à¦¦à§‡à¦“à¦¯à¦¼à¦¾à¦° à¦¸à¦®à¦¯à¦¼ à¦•à¦¿à¦­à¦¾à¦¬à§‡ à¦à¦¨à¦•à§‹à¦¡ à¦•à¦°à¦¾ à¦‰à¦šà¦¿à¦¤ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<form action="/submit" method="POST" enctype="multipart/form-data">...</form>`
			},
			{
				name: "target",
				description: "Specifies where to display the response after submitting the form",
				descriptionBn: "à¦«à¦°à§à¦® à¦œà¦®à¦¾ à¦¦à§‡à¦“à¦¯à¦¼à¦¾à¦° à¦ªà¦° à¦ªà§à¦°à¦¤à¦¿à¦•à§à¦°à¦¿à¦¯à¦¼à¦¾ à¦•à§‹à¦¥à¦¾à¦¯à¦¼ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¨ à¦•à¦°à¦¤à§‡ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<form action="/submit" method="POST" target="_blank">...</form>`
			}
		]
	},
	{
		id: 11,
		name: "input",
		definition: "Defines an input control in a form",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦«à¦°à§à¦®à§‡ à¦‡à¦¨à¦ªà§à¦Ÿ à¦¨à¦¿à¦¯à¦¼à¦¨à§à¦¤à§à¦°à¦£ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<input>",
		codeExample: `<input type="text" id="name" name="name">`,
		about: "The <input> tag is used to create interactive controls in a form.",
		aboutBn: "<input> à¦Ÿà§à¦¯à¦¾à¦—à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ à¦«à¦°à§à¦®à§‡ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à§‡à¦•à§à¦Ÿà¦¿à¦­ à¦¨à¦¿à¦¯à¦¼à¦¨à§à¦¤à§à¦°à¦£ à¦¤à§ˆà¦°à¦¿ à¦•à¦°à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à¥¤",
		useCase: "Use <input> tags to create various types of input fields.",
		useCaseBn: "à¦¬à¦¿à¦­à¦¿à¦¨à§à¦¨ à¦§à¦°à¦£à§‡à¦° à¦‡à¦¨à¦ªà§à¦Ÿ à¦•à§à¦·à§‡à¦¤à§à¦° à¦¤à§ˆà¦°à¦¿ à¦•à¦°à¦¤à§‡ <input> à¦Ÿà§à¦¯à¦¾à¦— à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: [
			{
				name: "type",
				description: "Specifies the type of input element to display",
				descriptionBn: "à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¨ à¦•à¦°à¦¾à¦° à¦œà¦¨à§à¦¯ à¦‡à¦¨à¦ªà§à¦Ÿ à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦§à¦°à¦¨ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<input type="text" id="name" name="name">`
			},
			{
				name: "id",
				description: "Specifies a unique id for the input element",
				descriptionBn: "à¦‡à¦¨à¦ªà§à¦Ÿ à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<input type="text" id="name" name="name">`
			},
			{
				name: "name",
				description: "Specifies the name of the input element",
				descriptionBn: "à¦‡à¦¨à¦ªà§à¦Ÿ à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<input type="text" id="name" name="name">`
			},
			{
				name: "value",
				description: "Specifies the value of the input element",
				descriptionBn: "à¦‡à¦¨à¦ªà§à¦Ÿ à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦®à¦¾à¦¨ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<input type="text" id="name" name="name" value="John">`
			},
			{
				name: "placeholder",
				description: "Specifies a short hint that describes the expected value of the input field",
				descriptionBn: "à¦‡à¦¨à¦ªà§à¦Ÿ à¦•à§à¦·à§‡à¦¤à§à¦°à§‡à¦° à¦ªà§à¦°à¦¤à§à¦¯à¦¾à¦¶à¦¿à¦¤ à¦®à¦¾à¦¨ à¦¬à¦°à§à¦£à¦¨à¦¾ à¦•à¦°à§‡ à¦à¦®à¦¨ à¦à¦•à¦Ÿà¦¿ à¦¸à¦‚à¦•à§à¦·à¦¿à¦ªà§à¦¤ à¦‡à¦™à§à¦—à¦¿à¦¤ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<input type="text" id="name" name="name" placeholder="Enter your name">`
			},
			{
				name: "required",
				description: "Specifies that the input field must be filled out before submitting the form",
				descriptionBn: "à¦«à¦°à§à¦® à¦œà¦®à¦¾ à¦¦à§‡à¦“à¦¯à¦¼à¦¾à¦° à¦†à¦—à§‡ à¦‡à¦¨à¦ªà§à¦Ÿ à¦•à§à¦·à§‡à¦¤à§à¦°à¦Ÿà¦¿ à¦ªà§‚à¦°à§à¦£ à¦•à¦°à¦¤à§‡ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<input type="text" id="name" name="name" required>`
			},
			{
				name: "disabled",
				description: "Specifies that the input field is disabled and cannot be interacted with",
				descriptionBn: "à¦‡à¦¨à¦ªà§à¦Ÿ à¦•à§à¦·à§‡à¦¤à§à¦°à¦Ÿà¦¿ à¦…à¦•à§à¦·à¦® à¦à¦¬à¦‚ à¦à¦° à¦¸à¦¾à¦¥à§‡ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦…à§à¦¯à¦¾à¦•à§à¦Ÿ à¦•à¦°à¦¾ à¦¯à¦¾à¦¬à§‡ à¦¨à¦¾ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<input type="text" id="name" name="name" disabled>`
			}
		]
	},
	{
		id: 12,
		name: "button",
		definition: "Defines a clickable button",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦•à§à¦²à¦¿à¦•à¦¯à§‹à¦—à§à¦¯ à¦¬à§‹à¦¤à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<button>Button Text</button>",
		codeExample: `<button type="submit">Submit</button>`,
		about: "The <button> element represents a clickable button, which can trigger actions.",
		aboutBn: "<button> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ à¦•à§à¦²à¦¿à¦•à¦¯à§‹à¦—à§à¦¯ à¦¬à§‹à¦¤à¦¾à¦® à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡, à¦¯à¦¾ à¦…à§à¦¯à¦¾à¦•à¦¶à¦¨ à¦Ÿà§à¦°à¦¿à¦—à¦¾à¦° à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¥¤",
		useCase: "Use buttons for form submissions or interactive actions.",
		useCaseBn: "à¦«à¦°à§à¦® à¦¸à¦¾à¦¬à¦®à¦¿à¦¶à¦¨ à¦¬à¦¾ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à§‡à¦•à§à¦Ÿà¦¿à¦­ à¦•à§à¦°à¦¿à¦¯à¦¼à¦¾à¦° à¦œà¦¨à§à¦¯ à¦¬à§‹à¦¤à¦¾à¦® à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: [
			{
				name: "type",
				description: "Specifies the type of button (button, submit, reset)",
				descriptionBn: "à¦¬à§‹à¦¤à¦¾à¦®à§‡à¦° à¦§à¦°à¦£ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡ (button, submit, reset)",
				example: `<button type="submit">Submit</button>`
			},
			{
				name: "disabled",
				description: "Disables the button so it cannot be clicked",
				descriptionBn: "à¦¬à§‹à¦¤à¦¾à¦®à¦Ÿà¦¿ à¦…à¦•à§à¦·à¦® à¦•à¦°à§‡ à¦¯à¦¾à¦¤à§‡ à¦à¦Ÿà¦¿ à¦•à§à¦²à¦¿à¦• à¦•à¦°à¦¾ à¦¨à¦¾ à¦¯à¦¾à¦¯à¦¼",
				example: `<button type="button" disabled>Click me</button>`
			},
			{
				name: "name",
				description: "Specifies the name of the button",
				descriptionBn: "à¦¬à§‹à¦¤à¦¾à¦®à§‡à¦° à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<button type="submit" name="saveBtn">Save</button>`
			},
			{
				name: "value",
				description: "Specifies the initial value of the button",
				descriptionBn: "à¦¬à§‹à¦¤à¦¾à¦®à§‡à¦° à¦ªà§à¦°à¦¾à¦¥à¦®à¦¿à¦• à¦®à¦¾à¦¨ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<button type="submit" value="Save">Save</button>`
			}
		]
	},
	{
		id: 13,
		name: "select",
		definition: "Defines a drop-down list",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦¡à§à¦°à¦ªà¦¡à¦¾à¦‰à¦¨ à¦²à¦¿à¦¸à§à¦Ÿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<select>...</select>",
		codeExample: `<select name="fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
</select>`,
		about: "The <select> element is used to create a drop-down list of options.",
		aboutBn: "<select> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦¬à¦¿à¦•à¦²à§à¦ªà¦—à§à¦²à¦¿à¦° à¦à¦•à¦Ÿà¦¿ à¦¡à§à¦°à¦ªà¦¡à¦¾à¦‰à¦¨ à¦²à¦¿à¦¸à§à¦Ÿ à¦¤à§ˆà¦°à¦¿ à¦•à¦°à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à¥¤",
		useCase: "Use <select> to allow users to choose one or more options.",
		useCaseBn: "à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à¦•à¦¾à¦°à§€à¦¦à§‡à¦° à¦à¦•à¦Ÿà¦¿ à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• à¦¬à¦¿à¦•à¦²à§à¦ª à¦¨à¦¿à¦°à§à¦¬à¦¾à¦šà¦¨ à¦•à¦°à¦¤à§‡ <select> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: [
			{
				name: "name",
				description: "Specifies the name of the select element",
				descriptionBn: "select à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<select name="fruits">...</select>`
			},
			{
				name: "multiple",
				description: "Allows multiple selections",
				descriptionBn: "à¦à¦•à¦¾à¦§à¦¿à¦• à¦¨à¦¿à¦°à§à¦¬à¦¾à¦šà¦¨ à¦…à¦¨à§à¦®à§‹à¦¦à¦¨ à¦•à¦°à§‡",
				example: `<select name="fruits" multiple>...</select>`
			},
			{
				name: "disabled",
				description: "Disables the select element",
				descriptionBn: "select à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦…à¦•à§à¦·à¦® à¦•à¦°à§‡",
				example: `<select name="fruits" disabled>...</select>`
			}
		]
	},
	{
		id: 14,
		name: "option",
		definition: "Defines an option in a drop-down list",
		definitionBn: "à¦¡à§à¦°à¦ªà¦¡à¦¾à¦‰à¦¨ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦¯à¦¼ à¦à¦•à¦Ÿà¦¿ à¦¬à¦¿à¦•à¦²à§à¦ª à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<option value=''>Option Text</option>",
		codeExample: `<option value="apple">Apple</option>`,
		about: "The <option> element defines an option in a <select> drop-down list.",
		aboutBn: "<option> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ <select> à¦¡à§à¦°à¦ªà¦¡à¦¾à¦‰à¦¨ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦¯à¦¼ à¦à¦•à¦Ÿà¦¿ à¦¬à¦¿à¦•à¦²à§à¦ª à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		useCase: "Use <option> inside <select> to provide choices.",
		useCaseBn: "<select> à¦à¦° à¦­à¦¿à¦¤à¦°à§‡ <option> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§‡ à¦¬à¦¿à¦•à¦²à§à¦ª à¦ªà§à¦°à¦¦à¦¾à¦¨ à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: [
			{
				name: "value",
				description: "Specifies the value to be sent to the server",
				descriptionBn: "à¦¸à¦¾à¦°à§à¦­à¦¾à¦°à§‡ à¦ªà¦¾à¦ à¦¾à¦¨à§‹à¦° à¦œà¦¨à§à¦¯ à¦®à¦¾à¦¨ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<option value="apple">Apple</option>`
			},
			{
				name: "selected",
				description: "Pre-selects the option",
				descriptionBn: "à¦¬à¦¿à¦•à¦²à§à¦ªà¦Ÿà¦¿ à¦ªà§à¦°à¦¿-à¦¸à¦¿à¦²à§‡à¦•à§à¦Ÿ à¦•à¦°à§‡",
				example: `<option value="banana" selected>Banana</option>`
			},
			{
				name: "disabled",
				description: "Disables the option",
				descriptionBn: "à¦¬à¦¿à¦•à¦²à§à¦ªà¦Ÿà¦¿ à¦…à¦•à§à¦·à¦® à¦•à¦°à§‡",
				example: `<option value="orange" disabled>Orange</option>`
			}
		]
	},
	{
		id: 15,
		name: "ul",
		definition: "Defines an unordered list",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦…à¦°à§à¦¡à¦¾à¦°à¦¬à¦¿à¦¹à§€à¦¨ à¦¤à¦¾à¦²à¦¿à¦•à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<ul>...</ul>",
		codeExample: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`,
		about: "The <ul> element is used for lists where the order of items does not matter.",
		aboutBn: "<ul> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦®à¦¨ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦° à¦œà¦¨à§à¦¯ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼ à¦¯à§‡à¦–à¦¾à¦¨à§‡ à¦†à¦‡à¦Ÿà§‡à¦®à§‡à¦° à¦•à§à¦°à¦® à¦—à§à¦°à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£ à¦¨à¦¯à¦¼à¥¤",
		useCase: "Use <ul> for navigation menus or bullet-point lists.",
		useCaseBn: "à¦¨à§‡à¦­à¦¿à¦—à§‡à¦¶à¦¨ à¦®à§‡à¦¨à§ à¦¬à¦¾ à¦¬à§à¦²à§‡à¦Ÿ-à¦ªà¦¯à¦¼à§‡à¦¨à§à¦Ÿ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦° à¦œà¦¨à§à¦¯ <ul> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "List",
		attributes: [
			{
				name: "type",
				description: "Specifies the bullet style (deprecated in HTML5)",
				descriptionBn: "à¦¬à§à¦²à§‡à¦Ÿà§‡à¦° à¦¸à§à¦Ÿà¦¾à¦‡à¦² à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡ (HTML5-à¦ à¦¡à¦¿à¦ªà§à¦°à¦¿à¦•à§‡à¦Ÿà§‡à¦¡)",
				example: `<ul type="circle">...</ul>`
			},
			{
				name: "class",
				description: "Specifies one or more CSS classes",
				descriptionBn: "à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• CSS à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<ul class="menu-list">...</ul>`
			},
			{
				name: "id",
				description: "Specifies a unique id for the element",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<ul id="main-list">...</ul>`
			}
		]
	},
	{
		id: 16,
		name: "ol",
		definition: "Defines an ordered list",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦…à¦°à§à¦¡à¦¾à¦°à¦¯à§à¦•à§à¦¤ à¦¤à¦¾à¦²à¦¿à¦•à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<ol>...</ol>",
		codeExample: `<ol>
  <li>First</li>
  <li>Second</li>
</ol>`,
		about: "The <ol> element is used for lists where the order of items matters.",
		aboutBn: "<ol> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦®à¦¨ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦° à¦œà¦¨à§à¦¯ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼ à¦¯à§‡à¦–à¦¾à¦¨à§‡ à¦†à¦‡à¦Ÿà§‡à¦®à§‡à¦° à¦•à§à¦°à¦® à¦—à§à¦°à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£à¥¤",
		useCase: "Use <ol> for steps, instructions, or rankings.",
		useCaseBn: "à¦§à¦¾à¦ª, à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶à¦¾à¦¬à¦²à§€ à¦¬à¦¾ à¦°â€à§à¦¯à¦¾à¦™à§à¦•à¦¿à¦‚-à¦à¦° à¦œà¦¨à§à¦¯ <ol> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "List",
		attributes: [
			{
				name: "type",
				description: "Specifies the numbering style (1, A, a, I, i)",
				descriptionBn: "à¦¨à¦®à§à¦¬à¦°à¦¿à¦‚ à¦¸à§à¦Ÿà¦¾à¦‡à¦² à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡ (1, A, a, I, i)",
				example: `<ol type="A">...</ol>`
			},
			{
				name: "start",
				description: "Specifies the start number of the list",
				descriptionBn: "à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦° à¦¶à§à¦°à§ à¦¨à¦®à§à¦¬à¦° à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<ol start="5">...</ol>`
			},
			{
				name: "reversed",
				description: "Specifies that the list order should be descending",
				descriptionBn: "à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦° à¦•à§à¦°à¦® à¦‰à¦²à§à¦Ÿà§‹ à¦•à¦°à¦¾ à¦‰à¦šà¦¿à¦¤ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<ol reversed>...</ol>`
			}
		]
	},
	{
		id: 17,
		name: "li",
		definition: "Defines a list item",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦¤à¦¾à¦²à¦¿à¦•à¦¾ à¦†à¦‡à¦Ÿà§‡à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<li>Item</li>",
		codeExample: `<li>Item 1</li>`,
		about: "The <li> element is used inside <ul> or <ol> to define individual items.",
		aboutBn: "<li> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ <ul> à¦¬à¦¾ <ol> à¦à¦° à¦­à¦¿à¦¤à¦°à§‡ à¦ªà§ƒà¦¥à¦• à¦†à¦‡à¦Ÿà§‡à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à§ƒà¦¤ à¦¹à¦¯à¦¼à¥¤",
		useCase: "Use <li> for each item in a list.",
		useCaseBn: "à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦° à¦ªà§à¦°à¦¤à¦¿à¦Ÿà¦¿ à¦†à¦‡à¦Ÿà§‡à¦®à§‡à¦° à¦œà¦¨à§à¦¯ <li> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "List",
		attributes: [
			{
				name: "value",
				description: "Specifies the value of the list item (only for ordered lists)",
				descriptionBn: "à¦¤à¦¾à¦²à¦¿à¦•à¦¾ à¦†à¦‡à¦Ÿà§‡à¦®à§‡à¦° à¦®à¦¾à¦¨ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡ (à¦•à§‡à¦¬à¦² à¦…à¦°à§à¦¡à¦¾à¦°à¦¯à§à¦•à§à¦¤ à¦¤à¦¾à¦²à¦¿à¦•à¦¾à¦° à¦œà¦¨à§à¦¯)",
				example: `<li value="3">Third Item</li>`
			},
			{
				name: "class",
				description: "Specifies one or more CSS classes",
				descriptionBn: "à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• CSS à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<li class="menu-item">Item</li>`
			},
			{
				name: "id",
				description: "Specifies a unique id for the element",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<li id="item1">Item</li>`
			}
		]
	},
	{
		id: 18,
		name: "table",
		definition: "Defines a table",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦Ÿà§‡à¦¬à¦¿à¦² à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<table>...</table>",
		codeExample: `<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>`,
		about: "The <table> element defines a table with rows and columns.",
		aboutBn: "<table> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦¸à¦¾à¦°à¦¿ à¦à¦¬à¦‚ à¦•à¦²à¦¾à¦®à¦¯à§à¦•à§à¦¤ à¦à¦•à¦Ÿà¦¿ à¦Ÿà§‡à¦¬à¦¿à¦² à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		useCase: "Use tables to display tabular data.",
		useCaseBn: "à¦¸à¦¾à¦°à¦£à§€ à¦¡à§‡à¦Ÿà¦¾ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦Ÿà§‡à¦¬à¦¿à¦² à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Table",
		attributes: [
			{
				name: "border",
				description: "Specifies the border width (deprecated in HTML5)",
				descriptionBn: "à¦¬à¦°à§à¦¡à¦¾à¦°à§‡à¦° à¦ªà§à¦°à¦¸à§à¦¥ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡ (HTML5-à¦ à¦¡à¦¿à¦ªà§à¦°à¦¿à¦•à§‡à¦Ÿà§‡à¦¡)",
				example: `<table border="1">...</table>`
			},
			{
				name: "cellpadding",
				description: "Specifies padding inside cells (deprecated in HTML5)",
				descriptionBn: "à¦¸à§‡à¦²à¦—à§à¦²à¦¿à¦° à¦­à¦¿à¦¤à¦°à§‡ à¦ªà§à¦¯à¦¾à¦¡à¦¿à¦‚ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡ (HTML5-à¦ à¦¡à¦¿à¦ªà§à¦°à¦¿à¦•à§‡à¦Ÿà§‡à¦¡)",
				example: `<table cellpadding="5">...</table>`
			},
			{
				name: "cellspacing",
				description: "Specifies space between cells (deprecated in HTML5)",
				descriptionBn: "à¦¸à§‡à¦²à¦—à§à¦²à¦¿à¦° à¦®à¦§à§à¦¯à§‡ à¦¸à§à¦¥à¦¾à¦¨ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡ (HTML5-à¦ à¦¡à¦¿à¦ªà§à¦°à¦¿à¦•à§‡à¦Ÿà§‡à¦¡)",
				example: `<table cellspacing="5">...</table>`
			},
			{
				name: "class",
				description: "Specifies one or more CSS classes",
				descriptionBn: "à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• CSS à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<table class="data-table">...</table>`
			},
			{
				name: "id",
				description: "Specifies a unique id for the element",
				descriptionBn: "à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<table id="users-table">...</table>`
			}
		]
	},
	{
		id: 19,
		name: "tr",
		definition: "Defines a table row",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦Ÿà§‡à¦¬à¦¿à¦² à¦¸à¦¾à¦°à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<tr>...</tr>",
		codeExample: `<tr>
  <td>Data 1</td>
  <td>Data 2</td>
</tr>`,
		about: "The <tr> element defines a row in a table.",
		aboutBn: "<tr> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡à¦° à¦à¦•à¦Ÿà¦¿ à¦¸à¦¾à¦°à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		useCase: "Use <tr> to group table cells into a row.",
		useCaseBn: "à¦Ÿà§‡à¦¬à¦¿à¦²à§‡à¦° à¦¸à§‡à¦²à¦—à§à¦²à¦¿à¦•à§‡ à¦à¦•à¦Ÿà¦¿ à¦¸à¦¾à¦°à¦¿à¦¤à§‡ à¦—à§à¦°à§à¦ª à¦•à¦°à¦¤à§‡ <tr> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Table",
		attributes: [{
			name: "class",
			description: "Specifies one or more CSS classes",
			descriptionBn: "à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• CSS à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<tr class="row-highlight">...</tr>`
		}, {
			name: "id",
			description: "Specifies a unique id for the row",
			descriptionBn: "à¦¸à¦¾à¦°à¦¿à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<tr id="row1">...</tr>`
		}]
	},
	{
		id: 20,
		name: "td",
		definition: "Defines a table cell",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦Ÿà§‡à¦¬à¦¿à¦² à¦¸à§‡à¦² à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<td>Data</td>",
		codeExample: `<td>Data 1</td>`,
		about: "The <td> element defines a standard cell in a table row.",
		aboutBn: "<td> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦Ÿà§‡à¦¬à¦¿à¦² à¦¸à¦¾à¦°à¦¿à¦° à¦à¦•à¦Ÿà¦¿ à¦¸à¦¾à¦§à¦¾à¦°à¦£ à¦¸à§‡à¦² à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡à¥¤",
		useCase: "Use <td> inside <tr> to add data cells.",
		useCaseBn: "<tr> à¦à¦° à¦­à¦¿à¦¤à¦°à§‡ <td> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§‡ à¦¡à§‡à¦Ÿà¦¾ à¦¸à§‡à¦² à¦¯à§‹à¦— à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Table",
		attributes: [
			{
				name: "colspan",
				description: "Specifies the number of columns a cell should span",
				descriptionBn: "à¦à¦•à¦Ÿà¦¿ à¦¸à§‡à¦² à¦•à¦¤à¦—à§à¦²à§‹ à¦•à¦²à¦¾à¦® à¦œà§à¦¡à¦¼à§‡ à¦¬à¦¿à¦¸à§à¦¤à§ƒà¦¤ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<td colspan="2">Merged Cell</td>`
			},
			{
				name: "rowspan",
				description: "Specifies the number of rows a cell should span",
				descriptionBn: "à¦à¦•à¦Ÿà¦¿ à¦¸à§‡à¦² à¦•à¦¤à¦—à§à¦²à§‹ à¦¸à¦¾à¦°à¦¿ à¦œà§à¦¡à¦¼à§‡ à¦¬à¦¿à¦¸à§à¦¤à§ƒà¦¤ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<td rowspan="2">Merged Cell</td>`
			},
			{
				name: "class",
				description: "Specifies one or more CSS classes",
				descriptionBn: "à¦à¦• à¦¬à¦¾ à¦à¦•à¦¾à¦§à¦¿à¦• CSS à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<td class="data-cell">Data</td>`
			},
			{
				name: "id",
				description: "Specifies a unique id for the cell",
				descriptionBn: "à¦¸à§‡à¦²à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<td id="cell1">Data</td>`
			}
		]
	},
	{
		id: 21,
		name: "header",
		definition: "Defines a header for a document or section",
		definitionBn: "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿ à¦¬à¦¾ à¦¸à§‡à¦•à¦¶à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦¹à§‡à¦¡à¦¾à¦° à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<header>...</header>",
		codeExample: `<header>
  <h1>My Website</h1>
  <nav>Navigation Menu</nav>
</header>`,
		about: "The <header> element represents introductory content or navigational links.",
		aboutBn: "<header> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦ªà§à¦°à¦¾à¦°à¦®à§à¦­à¦¿à¦• à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¬à¦¾ à¦¨à§à¦¯à¦¾à¦­à¦¿à¦—à§‡à¦¶à¦¨ à¦²à¦¿à¦™à§à¦• à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡à¥¤",
		useCase: "Use <header> at the top of a page or section for titles and menus.",
		useCaseBn: "à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦à¦¬à¦‚ à¦®à§‡à¦¨à§à¦° à¦œà¦¨à§à¦¯ à¦ªà§ƒà¦·à§à¦ à¦¾ à¦¬à¦¾ à¦¸à§‡à¦•à¦¶à¦¨à§‡à¦° à¦¶à§€à¦°à§à¦·à§‡ <header> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Semantic",
		attributes: [{
			name: "class",
			description: "Specifies CSS classes",
			descriptionBn: "CSS à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<header class="site-header">...</header>`
		}, {
			name: "id",
			description: "Specifies a unique ID",
			descriptionBn: "à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<header id="main-header">...</header>`
		}]
	},
	{
		id: 22,
		name: "footer",
		definition: "Defines a footer for a document or section",
		definitionBn: "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿ à¦¬à¦¾ à¦¸à§‡à¦•à¦¶à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦«à§à¦Ÿà¦¾à¦° à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<footer>...</footer>",
		codeExample: `<footer>
  <p>Â© 2025 My Website</p>
</footer>`,
		about: "The <footer> element represents footer content like copyright or contact info.",
		aboutBn: "<footer> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦•à¦ªà¦¿à¦°à¦¾à¦‡à¦Ÿ à¦¬à¦¾ à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦—à§‡à¦° à¦¤à¦¥à§à¦¯à§‡à¦° à¦®à¦¤à§‹ à¦«à§à¦Ÿà¦¾à¦° à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡à¥¤",
		useCase: "Use <footer> at the bottom of a page or section.",
		useCaseBn: "à¦ªà§ƒà¦·à§à¦ à¦¾ à¦¬à¦¾ à¦¸à§‡à¦•à¦¶à¦¨à§‡à¦° à¦¨à¦¿à¦šà§‡ <footer> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Semantic",
		attributes: [{
			name: "class",
			description: "Specifies CSS classes",
			descriptionBn: "CSS à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<footer class="site-footer">...</footer>`
		}, {
			name: "id",
			description: "Specifies a unique ID",
			descriptionBn: "à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<footer id="main-footer">...</footer>`
		}]
	},
	{
		id: 23,
		name: "section",
		definition: "Defines a section in a document",
		definitionBn: "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡ à¦à¦•à¦Ÿà¦¿ à¦¸à§‡à¦•à¦¶à¦¨ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<section>...</section>",
		codeExample: `<section>
  <h2>About Us</h2>
  <p>Information about our company.</p>
</section>`,
		about: "The <section> element represents a standalone section of content.",
		aboutBn: "<section> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦¸à§à¦¬à¦¤à¦¨à§à¦¤à§à¦° à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿà§‡à¦° à¦à¦•à¦Ÿà¦¿ à¦¸à§‡à¦•à¦¶à¦¨ à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡à¥¤",
		useCase: "Use <section> to group related content together.",
		useCaseBn: "à¦¸à¦‚à¦•à§à¦°à¦¾à¦¨à§à¦¤ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦à¦•à¦¤à§à¦°à¦¿à¦¤ à¦•à¦°à¦¤à§‡ <section> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Semantic",
		attributes: [{
			name: "class",
			description: "Specifies CSS classes",
			descriptionBn: "CSS à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<section class="about-section">...</section>`
		}, {
			name: "id",
			description: "Specifies a unique ID",
			descriptionBn: "à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<section id="about">...</section>`
		}]
	},
	{
		id: 24,
		name: "article",
		definition: "Defines an independent article",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦¸à§à¦¬à¦¾à¦§à§€à¦¨ à¦†à¦°à§à¦Ÿà¦¿à¦•à§‡à¦² à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<article>...</article>",
		codeExample: `<article>
  <h2>Blog Post</h2>
  <p>Content of the post.</p>
</article>`,
		about: "The <article> element represents self-contained content that can be distributed independently.",
		aboutBn: "<article> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦¸à§à¦¬à¦¤à¦¨à§à¦¤à§à¦° à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡ à¦¯à¦¾ à¦¸à§à¦¬à¦¾à¦§à§€à¦¨à¦­à¦¾à¦¬à§‡ à¦¬à¦¿à¦¤à¦°à¦£ à¦•à¦°à¦¾ à¦¯à§‡à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¥¤",
		useCase: "Use <article> for blog posts, news stories, or forum posts.",
		useCaseBn: "à¦¬à§à¦²à¦— à¦ªà§‹à¦¸à§à¦Ÿ, à¦¸à¦‚à¦¬à¦¾à¦¦ à¦•à¦¾à¦¹à¦¿à¦¨à§€, à¦¬à¦¾ à¦«à§‹à¦°à¦¾à¦® à¦ªà§‹à¦¸à§à¦Ÿà§‡à¦° à¦œà¦¨à§à¦¯ <article> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Semantic",
		attributes: [{
			name: "class",
			description: "Specifies CSS classes",
			descriptionBn: "CSS à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<article class="blog-post">...</article>`
		}, {
			name: "id",
			description: "Specifies a unique ID",
			descriptionBn: "à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<article id="post1">...</article>`
		}]
	},
	{
		id: 25,
		name: "video",
		definition: "Embeds a video file",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦­à¦¿à¦¡à¦¿à¦“ à¦«à¦¾à¦‡à¦² à¦à¦®à§à¦¬à§‡à¦¡ à¦•à¦°à§‡",
		syntax: "<video>...</video>",
		codeExample: `<video controls width="500">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`,
		about: "The <video> element allows you to embed video content on a web page.",
		aboutBn: "<video> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ à¦“à¦¯à¦¼à§‡à¦¬à¦ªà§ƒà¦·à§à¦ à¦¾à¦¯à¦¼ à¦­à¦¿à¦¡à¦¿à¦“ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦à¦®à§à¦¬à§‡à¦¡ à¦•à¦°à¦¤à§‡ à¦¦à§‡à¦¯à¦¼à¥¤",
		useCase: "Use <video> to show multimedia content like tutorials or advertisements.",
		useCaseBn: "à¦Ÿà¦¿à¦‰à¦Ÿà§‹à¦°à¦¿à¦¯à¦¼à¦¾à¦² à¦¬à¦¾ à¦¬à¦¿à¦œà§à¦žà¦¾à¦ªà¦¨à§‡à¦° à¦®à¦¤à§‹ à¦®à¦¾à¦²à§à¦Ÿà¦¿à¦®à¦¿à¦¡à¦¿à¦¯à¦¼à¦¾ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¦à§‡à¦–à¦¾à¦¨à§‹à¦° à¦œà¦¨à§à¦¯ <video> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Media",
		attributes: [
			{
				name: "controls",
				description: "Adds playback controls",
				descriptionBn: "à¦ªà§à¦²à§‡à¦¬à§à¦¯à¦¾à¦• à¦•à¦¨à§à¦Ÿà§à¦°à§‹à¦² à¦¯à§‹à¦— à¦•à¦°à§‡",
				example: `<video controls>...</video>`
			},
			{
				name: "autoplay",
				description: "Specifies that the video will start playing automatically",
				descriptionBn: "à¦­à¦¿à¦¡à¦¿à¦“ à¦¸à§à¦¬à¦¯à¦¼à¦‚à¦•à§à¦°à¦¿à¦¯à¦¼à¦­à¦¾à¦¬à§‡ à¦ªà§à¦²à§‡ à¦¶à§à¦°à§ à¦•à¦°à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<video autoplay>...</video>`
			},
			{
				name: "loop",
				description: "Specifies that the video will loop after finishing",
				descriptionBn: "à¦­à¦¿à¦¡à¦¿à¦“ à¦¶à§‡à¦· à¦¹à¦“à¦¯à¦¼à¦¾à¦° à¦ªà¦° à¦ªà§à¦¨à¦°à¦¾à¦¯à¦¼ à¦¶à§à¦°à§ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<video loop>...</video>`
			},
			{
				name: "muted",
				description: "Specifies that the video should start muted",
				descriptionBn: "à¦­à¦¿à¦¡à¦¿à¦“à¦Ÿà¦¿ à¦®à¦¿à¦‰à¦Ÿ à¦…à¦¬à¦¸à§à¦¥à¦¾à¦¯à¦¼ à¦¶à§à¦°à§ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<video muted>...</video>`
			},
			{
				name: "poster",
				description: "Specifies an image to show while the video is downloading or until the user hits play",
				descriptionBn: "à¦­à¦¿à¦¡à¦¿à¦“ à¦¡à¦¾à¦‰à¦¨à¦²à§‹à¦¡ à¦¹à¦“à¦¯à¦¼à¦¾ à¦¬à¦¾ à¦‡à¦‰à¦œà¦¾à¦° à¦ªà§à¦²à§‡ à¦¨à¦¾ à¦•à¦°à¦¾à¦° à¦¸à¦®à¦¯à¦¼ à¦à¦•à¦Ÿà¦¿ à¦›à¦¬à¦¿ à¦¦à§‡à¦–à¦¾à¦¯à¦¼",
				example: `<video poster="thumbnail.jpg">...</video>`
			}
		]
	},
	{
		id: 26,
		name: "audio",
		definition: "Embeds an audio file",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦…à¦¡à¦¿à¦“ à¦«à¦¾à¦‡à¦² à¦à¦®à§à¦¬à§‡à¦¡ à¦•à¦°à§‡",
		syntax: "<audio>...</audio>",
		codeExample: `<audio controls>
  <source src="music.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`,
		about: "The <audio> element allows you to embed audio content on a web page.",
		aboutBn: "<audio> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ à¦“à¦¯à¦¼à§‡à¦¬à¦ªà§ƒà¦·à§à¦ à¦¾à¦¯à¦¼ à¦…à¦¡à¦¿à¦“ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦à¦®à§à¦¬à§‡à¦¡ à¦•à¦°à¦¤à§‡ à¦¦à§‡à¦¯à¦¼à¥¤",
		useCase: "Use <audio> to play music, podcasts, or sound effects.",
		useCaseBn: "à¦®à¦¿à¦‰à¦œà¦¿à¦•, à¦ªà¦¡à¦•à¦¾à¦¸à§à¦Ÿ à¦¬à¦¾ à¦¸à¦¾à¦‰à¦¨à§à¦¡ à¦‡à¦«à§‡à¦•à§à¦Ÿ à¦ªà§à¦²à§‡ à¦•à¦°à¦¤à§‡ <audio> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Media",
		attributes: [
			{
				name: "controls",
				description: "Adds playback controls",
				descriptionBn: "à¦ªà§à¦²à§‡à¦¬à§à¦¯à¦¾à¦• à¦•à¦¨à§à¦Ÿà§à¦°à§‹à¦² à¦¯à§‹à¦— à¦•à¦°à§‡",
				example: `<audio controls>...</audio>`
			},
			{
				name: "autoplay",
				description: "Specifies that the audio will start automatically",
				descriptionBn: "à¦…à¦¡à¦¿à¦“ à¦¸à§à¦¬à¦¯à¦¼à¦‚à¦•à§à¦°à¦¿à¦¯à¦¼à¦­à¦¾à¦¬à§‡ à¦¶à§à¦°à§ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<audio autoplay>...</audio>`
			},
			{
				name: "loop",
				description: "Specifies that the audio will loop after finishing",
				descriptionBn: "à¦…à¦¡à¦¿à¦“ à¦¶à§‡à¦· à¦¹à¦“à¦¯à¦¼à¦¾à¦° à¦ªà¦° à¦ªà§à¦¨à¦°à¦¾à¦¯à¦¼ à¦¶à§à¦°à§ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<audio loop>...</audio>`
			},
			{
				name: "muted",
				description: "Specifies that the audio should start muted",
				descriptionBn: "à¦…à¦¡à¦¿à¦“ à¦®à¦¿à¦‰à¦Ÿ à¦…à¦¬à¦¸à§à¦¥à¦¾à¦¯à¦¼ à¦¶à§à¦°à§ à¦¹à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<audio muted>...</audio>`
			}
		]
	},
	{
		id: 27,
		name: "details",
		definition: "Defines additional details that the user can view or hide",
		definitionBn: "à¦…à¦¤à¦¿à¦°à¦¿à¦•à§à¦¤ à¦¬à¦¿à¦¬à¦°à¦£ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡ à¦¯à¦¾ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à¦•à¦¾à¦°à§€ à¦¦à§‡à¦–à¦¤à§‡ à¦¬à¦¾ à¦²à§à¦•à¦¾à¦¤à§‡ à¦ªà¦¾à¦°à§‡",
		syntax: "<details>...</details>",
		codeExample: `<details>
  <summary>More Info</summary>
  <p>Here are the additional details.</p>
</details>`,
		about: "The <details> element creates a disclosure widget for showing/hiding content.",
		aboutBn: "<details> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¦à§‡à¦–à¦¾à¦¨à§‹/à¦²à§à¦•à¦¾à¦¨à§‹à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦¡à¦¿à¦¸à¦•à§à¦²à§‹à¦œà¦¾à¦° à¦‰à¦‡à¦œà§‡à¦Ÿ à¦¤à§ˆà¦°à¦¿ à¦•à¦°à§‡à¥¤",
		useCase: "Use <details> to show optional or advanced content.",
		useCaseBn: "à¦à¦šà§à¦›à¦¿à¦• à¦¬à¦¾ à¦‰à¦¨à§à¦¨à¦¤ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¦à§‡à¦–à¦¾à¦¨à§‹à¦° à¦œà¦¨à§à¦¯ <details> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Interactive",
		attributes: [{
			name: "open",
			description: "Specifies that the details should be open by default",
			descriptionBn: "à¦¬à¦¿à¦¬à¦°à¦£à¦—à§à¦²à¦¿ à¦¡à¦¿à¦«à¦²à§à¦Ÿà¦­à¦¾à¦¬à§‡ à¦–à§‹à¦²à¦¾ à¦¥à¦¾à¦•à¦¬à§‡ à¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<details open>...</details>`
		}]
	},
	{
		id: 28,
		name: "summary",
		definition: "Defines a visible heading for a <details> element",
		definitionBn: "<details> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦¦à§ƒà¦¶à§à¦¯à¦®à¦¾à¦¨ à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<summary>Heading</summary>",
		codeExample: `<summary>More Info</summary>`,
		about: "The <summary> element provides a summary or caption for <details> content.",
		aboutBn: "<summary> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ <details> à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿà§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦¸à¦¾à¦°à¦¸à¦‚à¦•à§à¦·à§‡à¦ª à¦¬à¦¾ à¦•à§à¦¯à¦¾à¦ªà¦¶à¦¨ à¦ªà§à¦°à¦¦à¦¾à¦¨ à¦•à¦°à§‡à¥¤",
		useCase: "Use <summary> inside <details> as the clickable heading.",
		useCaseBn: "<details> à¦à¦° à¦­à¦¿à¦¤à¦°à§‡ <summary> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨ à¦•à§à¦²à¦¿à¦•à¦¯à§‹à¦—à§à¦¯ à¦¹à§‡à¦¡à¦¿à¦‚ à¦¹à¦¿à¦¸à§‡à¦¬à§‡à¥¤",
		active: true,
		category: "Interactive",
		attributes: []
	},
	{
		id: 29,
		name: "textarea",
		definition: "Defines a multi-line text input field",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦¬à¦¹à§-à¦²à¦¾à¦‡à¦¨ à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦‡à¦¨à¦ªà§à¦Ÿ à¦•à§à¦·à§‡à¦¤à§à¦° à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<textarea>...</textarea>",
		codeExample: `<textarea name="message" rows="4" cols="50">Your message here</textarea>`,
		about: "The <textarea> element allows users to input multiple lines of text.",
		aboutBn: "<textarea> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à¦•à¦¾à¦°à§€à¦¦à§‡à¦° à¦à¦•à¦¾à¦§à¦¿à¦• à¦²à¦¾à¦‡à¦¨à§‡à¦° à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦‡à¦¨à¦ªà§à¦Ÿ à¦•à¦°à¦¤à§‡ à¦¦à§‡à¦¯à¦¼à¥¤",
		useCase: "Use <textarea> for comments, messages, or long text input.",
		useCaseBn: "à¦®à¦¨à§à¦¤à¦¬à§à¦¯, à¦¬à¦¾à¦°à§à¦¤à¦¾ à¦¬à¦¾ à¦¦à§€à¦°à§à¦˜ à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦‡à¦¨à¦ªà§à¦Ÿà§‡à¦° à¦œà¦¨à§à¦¯ <textarea> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: [
			{
				name: "name",
				description: "Name of the textarea",
				descriptionBn: "Textarea à¦à¦° à¦¨à¦¾à¦®",
				example: `<textarea name="message"></textarea>`
			},
			{
				name: "rows",
				description: "Number of visible text lines",
				descriptionBn: "à¦¦à§ƒà¦¶à§à¦¯à¦®à¦¾à¦¨ à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦²à¦¾à¦‡à¦¨à§‡à¦° à¦¸à¦‚à¦–à§à¦¯à¦¾",
				example: `<textarea rows="4"></textarea>`
			},
			{
				name: "cols",
				description: "Width of the textarea in characters",
				descriptionBn: "Characters à¦…à¦¨à§à¦¯à¦¾à¦¯à¦¼à§€ textarea à¦ªà§à¦°à¦¸à§à¦¥",
				example: `<textarea cols="50"></textarea>`
			},
			{
				name: "placeholder",
				description: "Placeholder text",
				descriptionBn: "à¦ªà§à¦²à§‡à¦¸à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ",
				example: `<textarea placeholder="Enter text"></textarea>`
			},
			{
				name: "disabled",
				description: "Disables the textarea",
				descriptionBn: "Textarea à¦…à¦•à§à¦·à¦® à¦•à¦°à§‡",
				example: `<textarea disabled></textarea>`
			},
			{
				name: "readonly",
				description: "Read-only textarea",
				descriptionBn: "Textarea à¦¶à§à¦§à§à¦®à¦¾à¦¤à§à¦° à¦ªà¦¡à¦¼à¦¾à¦° à¦œà¦¨à§à¦¯",
				example: `<textarea readonly></textarea>`
			}
		]
	},
	{
		id: 30,
		name: "fieldset",
		definition: "Groups related form elements",
		definitionBn: "à¦¸à¦‚à¦•à§à¦°à¦¾à¦¨à§à¦¤ à¦«à¦°à§à¦® à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦—à§à¦²à§‹ à¦—à§à¦°à§à¦ª à¦•à¦°à§‡",
		syntax: "<fieldset>...</fieldset>",
		codeExample: `<fieldset>
  <legend>Personal Information</legend>
  <input type="text" name="name">
  <input type="email" name="email">
</fieldset>`,
		about: "The <fieldset> element groups related elements inside a form.",
		aboutBn: "<fieldset> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ à¦«à¦°à§à¦®à§‡à¦° à¦­à¦¿à¦¤à¦°à§‡ à¦¸à¦®à§à¦ªà¦°à§à¦•à¦¿à¦¤ à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦—à§à¦²à§‹ à¦—à§à¦°à§à¦ª à¦•à¦°à§‡à¥¤",
		useCase: "Use <fieldset> to organize related form fields.",
		useCaseBn: "à¦¸à¦‚à¦•à§à¦°à¦¾à¦¨à§à¦¤ à¦«à¦°à§à¦® à¦«à¦¿à¦²à§à¦¡à¦—à§à¦²à§‹à¦•à§‡ à¦¸à¦‚à¦—à¦ à¦¿à¦¤ à¦•à¦°à¦¤à§‡ <fieldset> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: [
			{
				name: "disabled",
				description: "Disables all form elements in the group",
				descriptionBn: "à¦—à§à¦°à§à¦ªà§‡à¦° à¦¸à¦¬ à¦«à¦°à§à¦® à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ à¦…à¦•à§à¦·à¦® à¦•à¦°à§‡",
				example: `<fieldset disabled>...</fieldset>`
			},
			{
				name: "class",
				description: "Specifies CSS classes",
				descriptionBn: "CSS à¦•à§à¦²à¦¾à¦¸ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<fieldset class="form-group">...</fieldset>`
			},
			{
				name: "id",
				description: "Specifies a unique ID",
				descriptionBn: "à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à¦¨à§à¦¯ à¦†à¦‡à¦¡à¦¿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<fieldset id="personal-info">...</fieldset>`
			}
		]
	},
	{
		id: 31,
		name: "legend",
		definition: "Defines a caption for a <fieldset>",
		definitionBn: "<fieldset> à¦à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦•à§à¦¯à¦¾à¦ªà¦¶à¦¨ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<legend>Caption</legend>",
		codeExample: `<fieldset>
  <legend>Personal Information</legend>
</fieldset>`,
		about: "The <legend> element provides a caption for the <fieldset> element.",
		aboutBn: "<legend> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ <fieldset> à¦à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦•à§à¦¯à¦¾à¦ªà¦¶à¦¨ à¦ªà§à¦°à¦¦à¦¾à¦¨ à¦•à¦°à§‡à¥¤",
		useCase: "Use <legend> to describe grouped form fields.",
		useCaseBn: "à¦—à§à¦°à§à¦ª à¦•à¦°à¦¾ à¦«à¦°à§à¦® à¦«à¦¿à¦²à§à¦¡à¦—à§à¦²à§‹à¦° à¦¬à¦°à§à¦£à¦¨à¦¾ à¦¦à¦¿à¦¤à§‡ <legend> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: []
	},
	{
		id: 32,
		name: "label",
		definition: "Defines a label for an <input> element",
		definitionBn: "<input> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦²à§‡à¦¬à§‡à¦² à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<label for='id'>Label Text</label>",
		codeExample: `<label for="name">Name:</label>
<input type="text" id="name" name="name">`,
		about: "The <label> element improves accessibility by associating text with a form control.",
		aboutBn: "<label> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ à¦«à¦°à§à¦® à¦•à¦¨à§à¦Ÿà§à¦°à§‹à¦²à§‡à¦° à¦¸à¦¾à¦¥à§‡ à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦¸à¦‚à¦¯à§à¦•à§à¦¤ à¦•à¦°à§‡ à¦…à§à¦¯à¦¾à¦•à§à¦¸à§‡à¦¸à¦¿à¦¬à¦¿à¦²à¦¿à¦Ÿà¦¿ à¦‰à¦¨à§à¦¨à¦¤ à¦•à¦°à§‡à¥¤",
		useCase: "Use <label> for all form controls to improve accessibility.",
		useCaseBn: "à¦…à§à¦¯à¦¾à¦•à§à¦¸à§‡à¦¸à¦¿à¦¬à¦¿à¦²à¦¿à¦Ÿà¦¿ à¦‰à¦¨à§à¦¨à¦¤ à¦•à¦°à¦¤à§‡ à¦¸à¦¬ à¦«à¦°à§à¦® à¦•à¦¨à§à¦Ÿà§à¦°à§‹à¦²à§‡à¦° à¦œà¦¨à§à¦¯ <label> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: [{
			name: "for",
			description: "Associates the label with an input element's id",
			descriptionBn: "à¦²à§‡à¦¬à§‡à¦²à¦•à§‡ à¦‡à¦¨à¦ªà§à¦Ÿ à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° id-à¦à¦° à¦¸à¦¾à¦¥à§‡ à¦¸à¦‚à¦¯à§à¦•à§à¦¤ à¦•à¦°à§‡",
			example: `<label for="email">Email</label>`
		}]
	},
	{
		id: 33,
		name: "iframe",
		definition: "Embeds another HTML page within the current page",
		definitionBn: "à¦¬à¦°à§à¦¤à¦®à¦¾à¦¨ à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦®à¦§à§à¦¯à§‡ à¦†à¦°à§‡à¦•à¦Ÿà¦¿ HTML à¦ªà§ƒà¦·à§à¦ à¦¾ à¦à¦®à§à¦¬à§‡à¦¡ à¦•à¦°à§‡",
		syntax: "<iframe src='url'></iframe>",
		codeExample: `<iframe src="https://example.com" width="600" height="400"></iframe>`,
		about: "The <iframe> element allows you to embed another web page inside your page.",
		aboutBn: "<iframe> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦†à¦ªà¦¨à¦¾à¦° à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦­à¦¿à¦¤à¦°à§‡ à¦†à¦°à§‡à¦•à¦Ÿà¦¿ à¦“à¦¯à¦¼à§‡à¦¬à¦ªà§ƒà¦·à§à¦ à¦¾ à¦à¦®à§à¦¬à§‡à¦¡ à¦•à¦°à¦¤à§‡ à¦¦à§‡à¦¯à¦¼à¥¤",
		useCase: "Use <iframe> to embed maps, videos, or external content.",
		useCaseBn: "à¦®à§à¦¯à¦¾à¦ª, à¦­à¦¿à¦¡à¦¿à¦“ à¦¬à¦¾ à¦¬à¦¹à¦¿à¦°à¦¾à¦—à¦¤ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦à¦®à§à¦¬à§‡à¦¡ à¦•à¦°à¦¤à§‡ <iframe> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Embed",
		attributes: [
			{
				name: "src",
				description: "Specifies the URL of the page to embed",
				descriptionBn: "à¦à¦®à§à¦¬à§‡à¦¡ à¦•à¦°à¦¾à¦° à¦ªà§ƒà¦·à§à¦ à¦¾à¦° URL à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<iframe src="page.html"></iframe>`
			},
			{
				name: "width",
				description: "Width of the iframe",
				descriptionBn: "Iframe à¦à¦° à¦ªà§à¦°à¦¸à§à¦¥ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<iframe width="600"></iframe>`
			},
			{
				name: "height",
				description: "Height of the iframe",
				descriptionBn: "Iframe à¦à¦° à¦‰à¦šà§à¦šà¦¤à¦¾ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
				example: `<iframe height="400"></iframe>`
			},
			{
				name: "frameborder",
				description: "Specifies border (deprecated in HTML5)",
				descriptionBn: "à¦¬à¦°à§à¦¡à¦¾à¦° à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡ (HTML5-à¦ deprecated)",
				example: `<iframe frameborder="0"></iframe>`
			},
			{
				name: "allowfullscreen",
				description: "Allows fullscreen mode",
				descriptionBn: "à¦«à§à¦²à¦¸à§à¦•à§à¦°à¦¿à¦¨ à¦®à§‹à¦¡ à¦…à¦¨à§à¦®à§‹à¦¦à¦¨ à¦•à¦°à§‡",
				example: `<iframe allowfullscreen></iframe>`
			}
		]
	},
	{
		id: 34,
		name: "nav",
		definition: "Defines navigation links",
		definitionBn: "à¦¨à§‡à¦­à¦¿à¦—à§‡à¦¶à¦¨ à¦²à¦¿à¦™à§à¦• à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<nav>...</nav>",
		codeExample: `<nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
</nav>`,
		about: "The <nav> element groups primary navigation links.",
		aboutBn: "<nav> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦ªà§à¦°à¦§à¦¾à¦¨ à¦¨à§‡à¦­à¦¿à¦—à§‡à¦¶à¦¨ à¦²à¦¿à¦™à§à¦•à¦—à§à¦²à§‹à¦•à§‡ à¦—à§à¦°à§à¦ª à¦•à¦°à§‡à¥¤",
		useCase: "Use <nav> for menus and site navigation.",
		useCaseBn: "à¦®à§‡à¦¨à§ à¦à¦¬à¦‚ à¦¸à¦¾à¦‡à¦Ÿ à¦¨à§‡à¦­à¦¿à¦—à§‡à¦¶à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ <nav> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Semantic",
		attributes: []
	},
	{
		id: 35,
		name: "main",
		definition: "Defines the main content of the document",
		definitionBn: "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦®à§‚à¦² à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<main>...</main>",
		codeExample: `<main>
  <h1>Main Content</h1>
  <p>Important information goes here.</p>
</main>`,
		about: "The <main> element highlights the central content of the page.",
		aboutBn: "<main> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦•à§‡à¦¨à§à¦¦à§à¦°à§€à¦¯à¦¼ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿà¦•à§‡ à¦¹à¦¾à¦‡à¦²à¦¾à¦‡à¦Ÿ à¦•à¦°à§‡à¥¤",
		useCase: "Use <main> to wrap the main content of your page.",
		useCaseBn: "à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦®à§‚à¦² à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿà¦•à§‡ à¦†à¦¬à§ƒà¦¤ à¦•à¦°à¦¤à§‡ <main> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Semantic",
		attributes: []
	},
	{
		id: 36,
		name: "aside",
		definition: "Defines content aside from the main content",
		definitionBn: "à¦®à§‚à¦² à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¥à§‡à¦•à§‡ à¦ªà§ƒà¦¥à¦• à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<aside>...</aside>",
		codeExample: `<aside>
  <h2>Related Links</h2>
  <p>Other articles you may like.</p>
</aside>`,
		about: "The <aside> element represents content related to the main content, like sidebars.",
		aboutBn: "<aside> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦®à§‚à¦² à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¸à¦®à§à¦ªà¦°à§à¦•à¦¿à¦¤ à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡, à¦¯à§‡à¦®à¦¨ à¦¸à¦¾à¦‡à¦¡à¦¬à¦¾à¦°à¥¤",
		useCase: "Use <aside> for sidebars or supplementary information.",
		useCaseBn: "à¦¸à¦¾à¦‡à¦¡à¦¬à¦¾à¦° à¦¬à¦¾ à¦…à¦¤à¦¿à¦°à¦¿à¦•à§à¦¤ à¦¤à¦¥à§à¦¯à§‡à¦° à¦œà¦¨à§à¦¯ <aside> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Semantic",
		attributes: []
	},
	{
		id: 37,
		name: "mark",
		definition: "Defines highlighted text",
		definitionBn: "à¦¹à¦¾à¦‡à¦²à¦¾à¦‡à¦Ÿ à¦•à¦°à¦¾ à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<mark>Text</mark>",
		codeExample: `<p>This is <mark>important</mark> text.</p>`,
		about: "The <mark> element highlights text for reference or emphasis.",
		aboutBn: "<mark> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦°à§‡à¦«à¦¾à¦°à§‡à¦¨à§à¦¸ à¦¬à¦¾ à¦—à§à¦°à§à¦¤à§à¦¬à§‡à¦° à¦œà¦¨à§à¦¯ à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦¹à¦¾à¦‡à¦²à¦¾à¦‡à¦Ÿ à¦•à¦°à§‡à¥¤",
		useCase: "Use <mark> to emphasize important text.",
		useCaseBn: "à¦—à§à¦°à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£ à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦¹à¦¾à¦‡à¦²à¦¾à¦‡à¦Ÿ à¦•à¦°à¦¤à§‡ <mark> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Text",
		attributes: []
	},
	{
		id: 38,
		name: "time",
		definition: "Defines a date/time",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦¤à¦¾à¦°à¦¿à¦–/à¦¸à¦®à¦¯à¦¼ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
		syntax: "<time datetime='YYYY-MM-DD'>Date</time>",
		codeExample: `<time datetime="2025-10-26">October 26, 2025</time>`,
		about: "The <time> element represents a specific time or date.",
		aboutBn: "<time> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ à¦¨à¦¿à¦°à§à¦¦à¦¿à¦·à§à¦Ÿ à¦¸à¦®à¦¯à¦¼ à¦¬à¦¾ à¦¤à¦¾à¦°à¦¿à¦– à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡à¥¤",
		useCase: "Use <time> to mark dates or times in your content.",
		useCaseBn: "à¦†à¦ªà¦¨à¦¾à¦° à¦•à¦¨à¦Ÿà§‡à¦¨à§à¦Ÿà§‡ à¦¤à¦¾à¦°à¦¿à¦– à¦¬à¦¾ à¦¸à¦®à¦¯à¦¼ à¦šà¦¿à¦¹à§à¦¨à¦¿à¦¤ à¦•à¦°à¦¤à§‡ <time> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Text",
		attributes: [{
			name: "datetime",
			description: "Specifies the machine-readable date/time",
			descriptionBn: "à¦®à§‡à¦¶à¦¿à¦¨-à¦ªà¦¾à¦ à¦¯à§‹à¦—à§à¦¯ à¦¤à¦¾à¦°à¦¿à¦–/à¦¸à¦®à¦¯à¦¼ à¦¨à¦¿à¦°à§à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡",
			example: `<time datetime="2025-10-26">Oct 26</time>`
		}]
	},
	{
		id: 39,
		name: "progress",
		definition: "Represents the completion progress of a task",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦•à¦¾à¦œà§‡à¦° à¦¸à¦®à§à¦ªà¦¨à§à¦¨à¦¤à¦¾à¦° à¦…à¦—à§à¦°à¦—à¦¤à¦¿ à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡",
		syntax: "<progress value='x' max='y'></progress>",
		codeExample: `<progress value="70" max="100"></progress>`,
		about: "The <progress> element shows how much of a task is completed.",
		aboutBn: "<progress> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ à¦•à¦¾à¦œ à¦•à¦¤à¦Ÿà§à¦•à§ à¦¸à¦®à§à¦ªà¦¨à§à¦¨ à¦¹à¦¯à¦¼à§‡à¦›à§‡ à¦¤à¦¾ à¦¦à§‡à¦–à¦¾à¦¯à¦¼à¥¤",
		useCase: "Use <progress> for progress bars or task completion indicators.",
		useCaseBn: "à¦ªà§à¦°à¦—à§à¦°à§‡à¦¸ à¦¬à¦¾à¦° à¦¬à¦¾ à¦•à¦¾à¦œà§‡à¦° à¦¸à¦®à§à¦ªà¦¨à§à¦¨à¦¤à¦¾à¦° à¦¸à§‚à¦šà¦• à¦¹à¦¿à¦¸à§‡à¦¬à§‡ <progress> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: [{
			name: "value",
			description: "Current progress value",
			descriptionBn: "à¦¬à¦°à§à¦¤à¦®à¦¾à¦¨ à¦…à¦—à§à¦°à¦—à¦¤à¦¿à¦° à¦®à¦¾à¦¨",
			example: `<progress value="70" max="100"></progress>`
		}, {
			name: "max",
			description: "Maximum progress value",
			descriptionBn: "à¦¸à¦°à§à¦¬à§‹à¦šà§à¦š à¦…à¦—à§à¦°à¦—à¦¤à¦¿à¦° à¦®à¦¾à¦¨",
			example: `<progress max="100"></progress>`
		}]
	},
	{
		id: 40,
		name: "meter",
		definition: "Represents a scalar measurement within a known range",
		definitionBn: "à¦à¦•à¦Ÿà¦¿ à¦ªà¦°à¦¿à¦šà¦¿à¦¤ à¦ªà¦°à¦¿à¦¸à¦°à§‡à¦° à¦®à¦§à§à¦¯à§‡ à¦à¦•à¦Ÿà¦¿ à¦¸à§à¦•à§‡à¦²à¦¾à¦° à¦ªà¦°à¦¿à¦®à¦¾à¦ª à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡",
		syntax: "<meter value='x' min='0' max='y'></meter>",
		codeExample: `<meter value="0.6" min="0" max="1"></meter>`,
		about: "The <meter> element represents a measurement, like disk usage or strength.",
		aboutBn: "<meter> à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ à¦ªà¦°à¦¿à¦®à¦¾à¦ª à¦¨à¦¿à¦°à§à¦¦à§‡à¦¶ à¦•à¦°à§‡, à¦¯à§‡à¦®à¦¨ à¦¡à¦¿à¦¸à§à¦• à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦¬à¦¾ à¦¶à¦•à§à¦¤à¦¿à¥¤",
		useCase: "Use <meter> to display measurements or performance metrics.",
		useCaseBn: "à¦ªà¦°à¦¿à¦®à¦¾à¦ª à¦¬à¦¾ à¦ªà¦¾à¦°à¦«à¦°à¦®à§à¦¯à¦¾à¦¨à§à¦¸ à¦®à§‡à¦Ÿà§à¦°à¦¿à¦• à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ <meter> à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à§à¦¨à¥¤",
		active: true,
		category: "Form",
		attributes: [
			{
				name: "value",
				description: "Current measurement",
				descriptionBn: "à¦¬à¦°à§à¦¤à¦®à¦¾à¦¨ à¦ªà¦°à¦¿à¦®à¦¾à¦ª",
				example: `<meter value="0.6"></meter>`
			},
			{
				name: "min",
				description: "Minimum value",
				descriptionBn: "à¦¨à§‚à¦¨à§à¦¯à¦¤à¦® à¦®à¦¾à¦¨",
				example: `<meter min="0"></meter>`
			},
			{
				name: "max",
				description: "Maximum value",
				descriptionBn: "à¦¸à¦°à§à¦¬à§‹à¦šà§à¦š à¦®à¦¾à¦¨",
				example: `<meter max="1"></meter>`
			}
		]
	}
];
function SearchTag({ show, setShow }) {
	const itemRefs = React.useRef([]);
	const navigate = useNavigate();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [searchQuery, setSearchQuery] = useState("");
	useEffect(() => {
		const el = itemRefs.current[selectedIndex];
		if (el) el.scrollIntoView({
			block: "nearest",
			behavior: "smooth"
		});
	}, [selectedIndex]);
	useEffect(() => {
		setSelectedIndex(0);
	}, [searchQuery]);
	const handleKeyDown = (e) => {
		if (!elements.length) return;
		if (e.key === "ArrowDown") {
			e.preventDefault();
			setSelectedIndex((prev) => prev === elements.length - 1 ? 0 : prev + 1);
		}
		if (e.key === "ArrowUp") {
			e.preventDefault();
			setSelectedIndex((prev) => prev === 0 ? elements.length - 1 : prev - 1);
		}
		if (e.key === "Enter") {
			e.preventDefault();
			const selected = elements[selectedIndex];
			if (selected) {
				setShow(false);
				navigate(`/html/allTag/${selected.name}`);
			}
		}
		if (e.key === "Escape") setShow(false);
	};
	useEffect(() => {
		document.body.style.overflow = show ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [show]);
	const elements = htmlTagsDataDitiles.filter((item) => item?.name.toLowerCase().includes(searchQuery.trim().toLowerCase()));
	if (!show) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "h-screen w-full relative  z-999 ",
		children: [/* @__PURE__ */ jsx("div", {
			onClick: () => setShow(false),
			className: "h-[110vh] w-full bg-[#062a5f38] backdrop-blur-[3px]"
		}), /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				y: -400,
				scale: 0
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			transition: {
				duration: .7,
				ease: "easeOut"
			},
			className: "fixed inset-0 flex items-start justify-center pt-20 pointer-events-none",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-[90%] max-w-[600px] bg-white shadow-2xl rounded-2xl pointer-events-auto",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "w-full flex items-center border-gray-300 border-b px-5 py-4 gap-3",
					children: [
						/* @__PURE__ */ jsx(Search, { className: "w-5 h-5 text-blue-500 shrink-0" }),
						/* @__PURE__ */ jsx("input", {
							autoFocus: true,
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							type: "text",
							onKeyDown: handleKeyDown,
							placeholder: "Search tag...",
							className: "flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setShow(false),
							"aria-label": "Close",
							className: "text-gray-500 hover:text-gray-700 transition-colors",
							children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "w-full min-h-[200px] max-h-[400px] overflow-y-auto p-6",
					children: searchQuery.trim() === "" ? /* @__PURE__ */ jsx("div", {
						className: "text-gray-400 text-center py-12",
						children: "No recent searches"
					}) : elements.length > 0 ? /* @__PURE__ */ jsx("div", {
						className: "space-y-2",
						children: elements.map((item, index) => {
							const isActive = index === selectedIndex;
							return /* @__PURE__ */ jsxs(Link, {
								ref: (el) => itemRefs.current[index] = el,
								to: `/html/allTag/${item?.name}`,
								onClick: () => setShow(false),
								onMouseEnter: () => setSelectedIndex(index),
								className: `
        p-3 rounded-lg cursor-pointer transition
        flex items-center gap-4
        ${isActive ? "bg-sky-500" : "hover:bg-sky-500"}
      `,
								children: [
									/* @__PURE__ */ jsx("div", {
										className: `
          border p-1 rounded
          ${isActive ? "border-sky-300" : "border-[#d4cfcf93]"}
        `,
										children: /* @__PURE__ */ jsx(Hash, { className: `
            h-5 w-5 stroke-1
            ${isActive ? "text-white" : "text-gray-500"}
          ` })
									}),
									/* @__PURE__ */ jsx("div", {
										className: `
          flex-1 font-semibold
          ${isActive ? "text-white" : "text-gray-400"}
        `,
										children: item?.name
									}),
									/* @__PURE__ */ jsx(ChevronRight, { className: `
          w-4 h-4
          ${isActive ? "text-white" : "text-gray-400"}
        ` })
								]
							}, index);
						})
					}) : /* @__PURE__ */ jsxs("div", {
						className: "text-gray-400 text-center py-12",
						children: [
							"No results found for \"",
							searchQuery,
							"\""
						]
					})
				})]
			})
		})]
	});
}
var SearchTag_default = SearchTag;
function SideBar({ isHiden = true, setShow }) {
	const location = useLocation();
	const dispatch = useDispatch();
	const ln = useSelector((state) => state.htmlStore.language);
	const [lang, setLang] = useState(ln);
	const [openId, setOpenId] = useState(null);
	const toggle = (id) => {
		setOpenId(openId === id ? null : id);
	};
	const sidebarItems = [
		{
			id: 0,
			title: "Home",
			titleBn: "à¦¹à§‹à¦®",
			icon: Home,
			path: "/"
		},
		{
			id: 1,
			title: "Introduction",
			titleBn: "à¦­à§‚à¦®à¦¿à¦•à¦¾",
			icon: BookOpen,
			path: "/html"
		},
		{
			id: 2,
			title: "Tutorial",
			titleBn: "à¦Ÿà¦¿à¦‰à¦Ÿà§‹à¦°à¦¿à¦¯à¦¼à¦¾à¦²",
			icon: BookText,
			children: [
				{
					id: 2.1,
					title: "Lesson 1",
					titleBn: "à¦ªà¦¾à¦  à§§",
					path: "/html/tutorial/lesson1"
				},
				{
					id: 2.2,
					title: "Lesson 2",
					titleBn: "à¦ªà¦¾à¦  à§¨",
					path: "/html/tutorial/lesson2"
				},
				{
					id: 2.3,
					title: "Lesson 3",
					titleBn: "à¦ªà¦¾à¦  à§©",
					path: "/html/tutorial/lesson3"
				},
				{
					id: 2.4,
					title: "Lesson 4",
					titleBn: "à¦ªà¦¾à¦  à§ª",
					path: "/html/tutorial/lesson4"
				},
				{
					id: 2.5,
					title: "Lesson 5",
					titleBn: "à¦ªà¦¾à¦  à§«",
					path: "/html/tutorial/lesson5"
				},
				{
					id: 2.6,
					title: "Lesson 6",
					titleBn: "à¦ªà¦¾à¦  à§¬",
					path: "/html/tutorial/lesson6"
				},
				{
					id: 2.7,
					title: "Lesson 7",
					titleBn: "à¦ªà¦¾à¦  à§­",
					path: "/html/tutorial/lesson7"
				},
				{
					id: 2.8,
					title: "Lesson8",
					titleBn: "à¦ªà¦¾à¦  à§®",
					path: "/html/tutorial/lesson8"
				},
				{
					id: 2.9,
					title: "Lesson9",
					titleBn: "à¦ªà¦¾à¦  à§¯",
					path: "/html/tutorial/lesson9"
				},
				{
					id: 2.1,
					title: "Lesson10",
					titleBn: "à¦ªà¦¾à¦  à§§à§¦",
					path: "/html/tutorial/lesson10"
				},
				{
					id: 2.11,
					title: "Lesson11",
					titleBn: "à¦ªà¦¾à¦  à§§à§§",
					path: "/html/tutorial/lesson11"
				},
				{
					id: 2.12,
					title: "Lesson12",
					titleBn: "à¦ªà¦¾à¦  à§§à§¨",
					path: "/html/tutorial/lesson12"
				}
			]
		},
		{
			id: 12,
			title: "All Tags",
			titleBn: "à¦¸à¦®à¦¸à§à¦¤ à¦Ÿà§à¦¯à¦¾à¦—",
			icon: Tags,
			path: "/html/allTag"
		},
		{
			id: 13,
			title: "Code Editor",
			titleBn: "à¦•à§‹à¦¡ à¦à¦¡à¦¿à¦Ÿà¦°",
			icon: Code,
			path: "/html/codeditor"
		}
	];
	const language = {
		id: 14,
		title: "Language",
		titleBn: "à¦­à¦¾à¦·à¦¾",
		icon: Globe,
		path: "/resources",
		children: [{
			title: "à¦¬à¦¾à¦‚à¦²à¦¾",
			sortName: "BN"
		}, {
			title: "English",
			sortName: "EN"
		}]
	};
	useEffect(() => {
		dispatch(changeLanguage(lang));
	}, [lang]);
	useEffect(() => {
		const newValue = sidebarItems.find((item) => {
			if (item?.children) {
				let a;
				item?.children?.map((i) => {
					if (i?.path === location?.pathname) {
						a = true;
						return;
					}
				});
				return a;
			} else return item?.path === location?.pathname;
		})?.title;
		if (newValue) document.title = `${newValue} | html-guide-app`;
	}, [location]);
	return /* @__PURE__ */ jsx(motion.aside, {
		initial: {
			opacity: 0,
			x: -100
		},
		animate: {
			opacity: 1,
			x: 0
		},
		transition: {
			duration: .7,
			ease: "easeOut"
		},
		className: `flex-col bg-[#f7faff] w-[90%] md:w-[40%] max-w-[300px] rounded-2xl gap-4 p-4 mt-20 mb-4  overflow-y-scroll md:overflow-hidden .hide-scrollbar-x  h-[calc(100vh-110px)] md:h-full md:min-h-[calc(100vh-50px)] shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${isHiden ? "hidden md:flex" : "flex md:hidden"} absolute top-7 shadow-[1px_1px_15px_#ddd] left-4 z-30 md:sticky `,
		children: /* @__PURE__ */ jsxs("ul", {
			className: "space-y-2 ",
			children: [sidebarItems.map((item) => {
				const Icon = item?.icon;
				if (item.children) return /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsxs("button", {
					onClick: () => toggle(item.id),
					className: "flex items-center justify-between w-full p-2 rounded-lg hover:bg-[#E0F2FF] transition",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx(Icon, {
							className: "text-[#0A74FF]",
							size: 20
						}), /* @__PURE__ */ jsx("span", {
							className: "text-gray-700 font-medium",
							children: lang === "EN" ? item.title : item.titleBn
						})]
					}), openId === item.id ? /* @__PURE__ */ jsx(ChevronUp, {
						className: "text-[#0A74FF]",
						size: 18
					}) : /* @__PURE__ */ jsx(ChevronDown, {
						className: "text-[#0A74FF]",
						size: 18
					})]
				}), /* @__PURE__ */ jsx(AnimatePresence, {
					initial: false,
					children: openId === item.id && /* @__PURE__ */ jsx(motion.ul, {
						initial: {
							height: 0,
							opacity: 0
						},
						animate: {
							height: "auto",
							opacity: 1
						},
						exit: {
							height: 0,
							opacity: 0
						},
						transition: { duration: .3 },
						className: "ml-8 mt-2 space-y-1 overflow-hidden",
						children: item.children.map((d) => /* @__PURE__ */ jsx("li", {
							onClick: () => setShow(false),
							children: /* @__PURE__ */ jsxs(NavLink, {
								"aria-label": d?.path,
								to: d?.path,
								className: ({ isActive }) => `flex items-center gap-2 p-2 rounded-md text-gray-600 hover:bg-[#E6F3FF] transition ${isActive ? "bg-[#bfe2fd] " : ""}`,
								children: ["â€¢ ", lang === "EN" ? d.title : d.titleBn]
							})
						}, d?.path))
					})
				})] }, item.id);
				return /* @__PURE__ */ jsx("li", {
					onClick: () => setShow(false),
					children: /* @__PURE__ */ jsxs(NavLink, {
						"aria-label": item?.path,
						to: item?.path,
						end: item?.path === "/" || item?.path === "/html",
						className: ({ isActive }) => `flex items-center gap-3 p-2 rounded-lg hover:bg-[#E0F2FF] transition ${isActive ? "bg-[#bfe2fd] " : ""}`,
						children: [/* @__PURE__ */ jsx(Icon, {
							className: "text-[#0A74FF]",
							size: 20
						}), /* @__PURE__ */ jsx("span", {
							className: "text-gray-700 font-medium",
							children: lang === "EN" ? item.title : item.titleBn
						})]
					})
				}, item.id);
			}), /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsxs("button", {
				onClick: () => toggle(language.id),
				className: "flex items-center justify-between w-full p-2 rounded-lg hover:bg-[#E0F2FF] transition",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx(Globe, {
						className: "text-[#0A74FF]",
						size: 20
					}), /* @__PURE__ */ jsx("span", {
						className: "text-gray-700 font-medium",
						children: lang === "EN" ? language.title : language.titleBn
					})]
				}), openId === language.id ? /* @__PURE__ */ jsx(ChevronUp, {
					className: "text-[#0A74FF]",
					size: 18
				}) : /* @__PURE__ */ jsx(ChevronDown, {
					className: "text-[#0A74FF]",
					size: 18
				})]
			}), /* @__PURE__ */ jsx(AnimatePresence, {
				initial: false,
				children: openId === language.id && /* @__PURE__ */ jsx(motion.ul, {
					initial: {
						height: 0,
						opacity: 0
					},
					animate: {
						height: "auto",
						opacity: 1
					},
					exit: {
						height: 0,
						opacity: 0
					},
					transition: { duration: .3 },
					className: "ml-8 mt-2 space-y-1 overflow-hidden",
					children: language.children.map((d) => /* @__PURE__ */ jsx("li", {
						onClick: () => setLang(d?.sortName),
						children: /* @__PURE__ */ jsxs("div", {
							"aria-label": d?.title,
							className: `flex items-center gap-2 p-2 rounded-md text-gray-600 hover:bg-[#E6F3FF] transition ${d.sortName === lang ? "bg-[#bfe2fd] " : ""}`,
							children: ["â€¢ ", d.title]
						})
					}, d?.sortName))
				})
			})] })]
		})
	});
}
var SideBar_default = SideBar;
function Header() {
	const [showSearchManue, setShowSearchManue] = useState(false);
	const [showSideBar, setShowSideBar] = useState(false);
	useEffect(() => {
		document.body.style.overflow = showSideBar || showSearchManue ? "hidden" : "auto";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showSearchManue, showSideBar]);
	return /* @__PURE__ */ jsxs(motion.header, {
		initial: {
			opacity: 0,
			y: -30
		},
		animate: {
			opacity: 1,
			y: -10
		},
		transition: {
			duration: .7,
			ease: "easeOut"
		},
		className: " fixed w-full z-40",
		children: [
			showSearchManue && /* @__PURE__ */ jsx(SearchTag_default, {
				show: showSearchManue,
				setShow: setShowSearchManue
			}),
			showSideBar && /* @__PURE__ */ jsx(SideBar_default, {
				isHiden: false,
				setShow: setShowSideBar
			}),
			showSideBar && /* @__PURE__ */ jsx("div", {
				onClick: () => setShowSideBar(false),
				className: " absolute backdrop-blur-md\r\n        w-full h-[103vh] z-20 md:hidden"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: " max-w-[96%] sm:max-w-[98%] mx-auto h-20 bg-white rounded-2xl p-5 sm:p-8 shadow-[0_4px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(10,116,255,0.15)] transition flex z-20 items-center justify-between text-center  hover:translate-y-1 fixed inset-0  mb-3 mt-4  duration-300 overflow-hidden gap-4",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/",
					children: /* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-bold font-[Yatra_One] text-[#0250b6]",
						children: "<html/>"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: " flex gap-2",
					children: [/* @__PURE__ */ jsxs("button", {
						"aria-label": "Search",
						type: "button",
						onClick: () => setShowSearchManue((prv) => !prv),
						className: "text-blue-500 hover:text-blue-600 transition-colors sm:mr-2 flex items-center gap-1 text-md  bg-gray-50 border border-blue-200 rounded-full hover:shadow p-3 sm:px-4 sm:py-2 focus-within:ring-2 focus-within:ring-blue-400 ",
						children: [/* @__PURE__ */ jsx(Search, { className: "w-5 h-5 sm:w-4 sm:h-4" }), /* @__PURE__ */ jsx("p", {
							className: " hidden sm:block",
							children: "Search tag"
						})]
					}), /* @__PURE__ */ jsx("button", {
						"aria-label": "Menu ",
						type: "button",
						onClick: () => setShowSideBar((prv) => !prv),
						className: "text-blue-500 hover:text-blue-600 transition-colors  flex items-center gap-1 text-md  p-3 bg-gray-50 border border-blue-200 rounded-full hover:shadow   focus-within:ring-blue-400 md:hidden",
						children: !showSideBar ? /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5 " }) : /* @__PURE__ */ jsx(X, { className: "w-5 h-5 " })
					})]
				})]
			})
		]
	});
}
var Header_default = Header;
function App() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-[#eaf0f5] w-full relative ",
		children: [
			/* @__PURE__ */ jsx(Header_default, {}),
			/* @__PURE__ */ jsx("div", { className: "h-1 w-full" }),
			/* @__PURE__ */ jsxs("section", {
				className: "flex gap-4 items-stretch py-4 p-1 sm:p-4 ",
				children: [/* @__PURE__ */ jsx(SideBar_default, {
					className: "w-64",
					setShow: () => false
				}), /* @__PURE__ */ jsx(motion.main, {
					initial: {
						opacity: 0,
						y: 50
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						ease: "backInOut"
					},
					className: "flex flex-col gap-4 w-full min-h-[calc(100vh-87px)] bg-[#f2f7ff] rounded-2xl p-4  mt-20 mb-4 shadow-lg overflow-y-auto hide-scrollbar-x",
					children: /* @__PURE__ */ jsx(Outlet, {})
				})]
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "group  mx-4  bg-white rounded-2xl p-8 shadow-[0px_-4px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_-6px_20px_rgba(10,116,255,0.15)] transition flex flex-col items-center justify-center text-center  hover:-translate-y-1 duration-300",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"Â© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					/* @__PURE__ */ jsx("a", {
						href: "https://github.com/torekulislam",
						target: "_blank",
						children: "Torekul Islam"
					})
				] }), /* @__PURE__ */ jsx("div", { className: "mt-2 h-[3px] w-34 sm:w-0 bg-linear-to-r from-[#0A74FF] to-[#38BDF8] rounded-full group-hover:w-34 transition-all duration-500" })]
			})
		]
	});
}
var App_default = App;
var tracks = [
	{
		id: "html",
		title: "HTML",
		titleBn: "à¦à¦‡à¦šà¦Ÿà¦¿à¦à¦®à¦à¦²",
		tagline: "Structure & Markup",
		taglineBn: "à¦—à¦ à¦¨ à¦“ à¦®à¦¾à¦°à§à¦•à¦†à¦ª",
		desc: "Build the skeleton of every website with elements, attributes and semantic tags.",
		descBn: "à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿ, à¦…à§à¦¯à¦¾à¦Ÿà§à¦°à¦¿à¦¬à¦¿à¦‰à¦Ÿ à¦“ à¦¸à§‡à¦®à¦¾à¦¨à§à¦Ÿà¦¿à¦• à¦Ÿà§à¦¯à¦¾à¦— à¦¦à¦¿à¦¯à¦¼à§‡ à¦“à¦¯à¦¼à§‡à¦¬à¦¸à¦¾à¦‡à¦Ÿà§‡à¦° à¦•à¦¾à¦ à¦¾à¦®à§‹ à¦¤à§ˆà¦°à¦¿ à¦•à¦°à§à¦¨à¥¤",
		to: "/html",
		ready: true,
		color: "#E34F26",
		onColor: "#FFFFFF",
		gradient: "from-[#E34F26] to-[#F5804A]",
		Icon: FileCode
	},
	{
		id: "css",
		title: "CSS",
		titleBn: "à¦¸à¦¿à¦à¦¸à¦à¦¸",
		tagline: "Style & Layout",
		taglineBn: "à¦¸à§à¦Ÿà¦¾à¦‡à¦² à¦“ à¦²à§‡à¦†à¦‰à¦Ÿ",
		desc: "Style your pages with colors, layouts, responsive design and animations.",
		descBn: "à¦°à¦™, à¦²à§‡à¦†à¦‰à¦Ÿ, à¦°à§‡à¦¸à¦ªà¦¨à§à¦¸à¦¿à¦­ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨ à¦“ à¦…à§à¦¯à¦¾à¦¨à¦¿à¦®à§‡à¦¶à¦¨ à¦¦à¦¿à¦¯à¦¼à§‡ à¦ªà§‡à¦œ à¦¸à¦¾à¦œà¦¾à¦¨à¥¤",
		to: "/css",
		ready: false,
		color: "#1572B6",
		onColor: "#FFFFFF",
		gradient: "from-[#1572B6] to-[#38BDF8]",
		Icon: Palette
	},
	{
		id: "js",
		title: "JavaScript",
		titleBn: "à¦œà¦¾à¦­à¦¾à¦¸à§à¦•à§à¦°à¦¿à¦ªà§à¦Ÿ",
		tagline: "Behavior & Logic",
		taglineBn: "à¦†à¦šà¦°à¦£ à¦“ à¦²à¦œà¦¿à¦•",
		desc: "Bring your pages to life with interactivity, logic and dynamic content.",
		descBn: "à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦…à§à¦¯à¦¾à¦•à§à¦Ÿà¦¿à¦­à¦¿à¦Ÿà¦¿, à¦²à¦œà¦¿à¦• à¦“ à¦¡à¦¾à¦‡à¦¨à¦¾à¦®à¦¿à¦• à¦•à¦¨à§à¦Ÿà§‡à¦¨à§à¦Ÿ à¦¦à¦¿à¦¯à¦¼à§‡ à¦ªà§‡à¦œà¦•à§‡ à¦ªà§à¦°à¦¾à¦£à¦¬à¦¨à§à¦¤ à¦•à¦°à§à¦¨à¥¤",
		to: "/js",
		ready: false,
		color: "#F7DF1E",
		onColor: "#1E293B",
		gradient: "from-[#F7DF1E] to-[#F5B301]",
		Icon: Zap
	}
];
function HomePage() {
	const isBangla = useSelector((state) => state.htmlStore.language) === "BN";
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-6xl mx-auto sm:px-8 sm:py-12 py-2 space-y-12",
		children: [
			/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .6,
					ease: "easeOut"
				},
				className: "bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-2xl p-8 sm:p-10 shadow-lg",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 text-blue-100 text-sm font-semibold uppercase tracking-wider",
						children: [/* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4" }), isBangla ? "à¦«à§à¦°à¦¨à§à¦Ÿà¦à¦¨à§à¦¡ à¦—à¦¾à¦‡à¦¡" : "Frontend Guide"]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "text-4xl sm:text-5xl font-bold mt-3",
						children: isBangla ? "HTML, CSS à¦“ JS à¦¶à¦¿à¦–à§à¦¨" : "Learn HTML, CSS & JS"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg text-blue-50 mt-3 max-w-2xl",
						children: isBangla ? "à¦¶à§à¦°à§ à¦•à¦°à§à¦¨ à¦¨à¦¤à§à¦¨à¦¦à§‡à¦° à¦œà¦¨à§à¦¯ à¦¸à¦¹à¦œ à¦¬à¦¾à¦‚à¦²à¦¾ à¦“ à¦‡à¦‚à¦°à§‡à¦œà¦¿ à¦‰à¦¦à¦¾à¦¹à¦°à¦£à¦¸à¦¹ â€” à¦ªà§à¦°à¦¤à¦¿à¦Ÿà¦¿ à¦§à¦¾à¦ªà§‡ à¦§à¦¾à¦ªà§‡à¥¤" : "Step by step tutorials with simple Bangla & English examples â€” from beginner to pro."
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
				className: "text-2xl sm:text-3xl font-bold text-gray-800",
				children: isBangla ? "à¦•à§‹à¦¨ à¦­à¦¾à¦·à¦¾ à¦¦à¦¿à¦¯à¦¼à§‡ à¦¶à§à¦°à§ à¦•à¦°à¦¬à§‡à¦¨?" : "Which language do you want to start with?"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-gray-600 mt-2",
				children: isBangla ? "à¦ªà§à¦°à¦¤à¦¿à¦Ÿà¦¿ à¦•à¦¾à¦°à§à¦¡à§‡ à¦Ÿà¦¿à¦‰à¦Ÿà§‹à¦°à¦¿à¦¯à¦¼à¦¾à¦², à¦Ÿà§à¦¯à¦¾à¦— à¦°à§‡à¦«à¦¾à¦°à§‡à¦¨à§à¦¸ à¦“ à¦²à¦¾à¦‡à¦­ à¦•à§‹à¦¡ à¦à¦¡à¦¿à¦Ÿà¦° à¦ªà¦¾à¦¬à§‡à¦¨à¥¤" : "Every card gives you tutorials, a tag reference and a live code editor."
			})] }),
			/* @__PURE__ */ jsx("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: tracks.map((track, index) => /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: index * .1,
						ease: "easeOut"
					},
					children: /* @__PURE__ */ jsxs(Link, {
						to: track.to,
						className: "group block h-full rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] transition-all duration-300",
						children: [
							/* @__PURE__ */ jsx("div", { className: `h-1.5 w-16 rounded-full bg-linear-to-r ${track.gradient}` }),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-5 flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "grid h-14 w-14 place-items-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110",
									style: {
										backgroundColor: track.color,
										color: track.onColor
									},
									children: /* @__PURE__ */ jsx(track.Icon, { className: "h-7 w-7" })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
									className: "text-2xl font-bold text-gray-800",
									children: isBangla ? track.titleBn : track.title
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm text-gray-500",
									children: isBangla ? track.taglineBn : track.tagline
								})] })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-gray-600 text-sm leading-relaxed",
								children: isBangla ? track.descBn : track.desc
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex items-center justify-between",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-sm font-semibold px-3 py-1.5 rounded-full",
									style: {
										backgroundColor: `${track.color}1a`,
										color: track.id === "js" ? "#B45309" : track.color
									},
									children: track.ready ? isBangla ? "à¦¶à§à¦°à§ à¦•à¦°à§à¦¨" : "Start learning" : isBangla ? "à¦¶à§€à¦˜à§à¦°à¦‡ à¦†à¦¸à¦›à§‡" : "Coming soon"
								}), /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" })]
							})
						]
					})
				}, track.id))
			})
		]
	});
}
var HomePage_default = HomePage;
function CodeExample({ code }) {
	const [copied, setCopied] = useState(false);
	const dispatch = useDispatch();
	function handelClick() {
		dispatch(changeHtmlCode(code));
	}
	let highlighted = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/(&lt;!--[\s\S]*?--&gt;)/g, `<span class="text-green-500">$1</span>`);
	highlighted = highlighted.replace(/(&lt;\/?)([a-zA-Z0-9-]+)(.*?)(\/?&gt;)/g, `<span class="text-gray-500">$1</span><span class="text-red-500">$2</span><span class="text-gray-200">$3</span><span class="text-gray-500">$4</span>`);
	highlighted = highlighted.replace(/ {2}/g, "&nbsp;&nbsp;");
	const handleCopy = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: "bg-[#1E1E1E] text-gray-200 font-mono text-sm rounded-xl overflow-hidden max-h-[400px] my-4",
		children: [/* @__PURE__ */ jsx("div", {
			className: "flex justify-between items-center px-4 py-2 bg-[#262626] border-b border-[#333]",
			children: /* @__PURE__ */ jsx("button", {
				onClick: handleCopy,
				className: "text-gray-300 text-[14px] px-3 py-1  rounded hover:text-gray-200 transition",
				children: copied ? /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ jsx(CopyCheck, { className: "h-4" }), " Copied!"]
				}) : /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ jsx(Copy, { className: "h-4" }), " Copy Code"]
				})
			})
		}), /* @__PURE__ */ jsx("pre", {
			className: "whitespace-pre-wrap bg-[#1E1E1E] text-gray-200 font-mono text-sm rounded-xl overflow-x-auto overflow-y-auto max-h-[400px] p-4  pb-15",
			dangerouslySetInnerHTML: { __html: highlighted }
		})]
	}), /* @__PURE__ */ jsxs(Link, {
		to: "/html/codeditor",
		onClick: handelClick,
		className: " flex gap-1 bg-blue-600 text-amber-50 w-fit items-center px-4 p-2 rounded-md ",
		children: [
			" ",
			/* @__PURE__ */ jsx(Radio, {}),
			"Try it Yourself >>"
		]
	})] });
}
function Card({ children, className = "", animate = true }) {
	const location = useLocation();
	return animate ? /* @__PURE__ */ jsx(motion.div, {
		initial: {
			opacity: 0,
			y: 30
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: 1,
			ease: "anticipate"
		},
		className: `rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-xl ${className}`,
		children
	}, location.pathname) : /* @__PURE__ */ jsx("div", {
		className: `rounded-3xl p-8 shadow-xl ${className}`,
		children
	});
}
function Introduction() {
	const isBangla = useSelector((state) => state.htmlStore.language) === "BN";
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen ",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto sm:px-8 sm:py-12 py-2 space-y-12",
			children: [
				/* @__PURE__ */ jsxs(Card, {
					className: "bg-linear-to-r from-blue-600 to-blue-500  text-white ",
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex gap-2 justify-between items-start",
						children: /* @__PURE__ */ jsx("h2", {
							className: "text-4xl font-bold mb-4",
							children: isBangla ? "HTML à¦­à§‚à¦®à¦¿à¦•à¦¾" : "HTML Introduction"
						})
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xl text-blue-50",
						children: isBangla ? "HTML à¦¹à¦² à¦“à¦¯à¦¼à§‡à¦¬ à¦ªà§‡à¦œ à¦¤à§ˆà¦°à¦¿à¦° à¦œà¦¨à§à¦¯ à¦¸à§à¦Ÿà§à¦¯à¦¾à¦¨à§à¦¡à¦¾à¦°à§à¦¡ à¦®à¦¾à¦°à§à¦•à¦†à¦ª à¦²à§à¦¯à¦¾à¦™à§à¦—à§à¦¯à¦¼à§‡à¦œà¥¤" : "HTML is the standard markup language for creating web pages."
					})]
				}),
				/* @__PURE__ */ jsxs(Card, {
					className: "bg-white   shadow-md border border-blue-100",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ jsx(BookOpen, { className: "w-7 h-7 text-blue-600" }), /* @__PURE__ */ jsx("h3", {
							className: "text-3xl font-bold text-gray-800",
							children: isBangla ? "HTML à¦•à¦¿?" : "What is HTML?"
						})]
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-3 text-gray-700",
						children: [
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-blue-600 mt-1",
									children: "â€¢"
								}), /* @__PURE__ */ jsx("span", { children: isBangla ? "HTML à¦à¦° à¦…à¦°à§à¦¥ à¦¹à¦² à¦¹à¦¾à¦‡à¦ªà¦¾à¦° à¦Ÿà§‡à¦•à§à¦¸à¦Ÿ à¦®à¦¾à¦°à§à¦•à¦†à¦ª à¦²à§à¦¯à¦¾à¦™à§à¦—à§à¦¯à¦¼à§‡à¦œ" : "HTML stands for Hyper Text Markup Language" })]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-blue-600 mt-1",
									children: "â€¢"
								}), /* @__PURE__ */ jsx("span", { children: isBangla ? "HTML à¦à¦•à¦Ÿà¦¿ à¦“à¦¯à¦¼à§‡à¦¬ à¦ªà§‡à¦œà§‡à¦° à¦—à¦ à¦¨ à¦¬à¦°à§à¦£à¦¨à¦¾ à¦•à¦°à§‡" : "HTML describes the structure of a web page" })]
							}),
							/* @__PURE__ */ jsxs("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-blue-600 mt-1",
									children: "â€¢"
								}), /* @__PURE__ */ jsx("span", { children: isBangla ? "HTML à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿ à¦¬à§à¦°à¦¾à¦‰à¦œà¦¾à¦°à¦•à§‡ à¦¬à¦²à§‡ à¦•à¦¿à¦­à¦¾à¦¬à§‡ à¦•à¦¨à§à¦Ÿà§‡à¦¨à§à¦Ÿ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¨ à¦•à¦°à¦¤à§‡ à¦¹à¦¯à¦¼" : "HTML elements tell the browser how to display content" })]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs(Card, {
					className: "bg-white  border border-blue-100",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-2xl font-bold text-gray-800 mb-4",
						children: isBangla ? "à¦à¦•à¦Ÿà¦¿ à¦¸à¦¹à¦œ HTML à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿ" : "A Simple HTML Document"
					}), /* @__PURE__ */ jsx(CodeExample, { code: `<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>` })]
				}),
				/* @__PURE__ */ jsxs(Card, {
					className: "bg-white  border border-slate-200 p-6",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold text-slate-900 mb-4",
						children: isBangla ? "à¦‰à¦¦à¦¾à¦¹à¦°à¦£ à¦¬à§à¦¯à¦¾à¦–à§à¦¯à¦¾" : "Example Explained"
					}), /* @__PURE__ */ jsxs("div", {
						className: "space-y-3 text-slate-700",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("code", {
									className: "shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded",
									children: "<!DOCTYPE html>"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm leading-relaxed",
									children: isBangla ? "à¦˜à§‹à¦·à¦£à¦¾ à¦•à¦°à§‡ à¦¯à§‡ à¦à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ HTML5 à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿ" : "Declares that this document is an HTML5 document"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("code", {
									className: "shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded",
									children: "<html>"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm leading-relaxed",
									children: isBangla ? "HTML à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦®à§‚à¦² à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿ" : "The root element of an HTML page"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("code", {
									className: "shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded",
									children: "<head>"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm leading-relaxed",
									children: isBangla ? "HTML à¦ªà§ƒà¦·à§à¦ à¦¾ à¦¸à¦®à§à¦ªà¦°à§à¦•à§‡ à¦®à§‡à¦Ÿà¦¾ à¦¤à¦¥à§à¦¯ à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡" : "Contains meta information about the HTML page"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("code", {
									className: "shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded",
									children: "<title>"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm leading-relaxed",
									children: isBangla ? "HTML à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦œà¦¨à§à¦¯ à¦à¦•à¦Ÿà¦¿ à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¨à¦¿à¦°à§à¦¦à¦¿à¦·à§à¦Ÿ à¦•à¦°à§‡ (à¦¯à¦¾ à¦¬à§à¦°à¦¾à¦‰à¦œà¦¾à¦°à§‡à¦° à¦Ÿà¦¾à¦‡à¦Ÿà§‡à¦² à¦¬à¦¾à¦°à§‡ à¦¬à¦¾ à¦Ÿà§à¦¯à¦¾à¦¬à§‡ à¦¦à§‡à¦–à¦¾à¦¯à¦¼)" : "Specifies a title for the HTML page (shown in browser's title bar or tab)"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("code", {
									className: "shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded",
									children: "<body>"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm leading-relaxed",
									children: isBangla ? "à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿà§‡à¦° à¦¬à¦¡à¦¿ à¦¸à¦‚à¦œà§à¦žà¦¾à¦¯à¦¼à¦¿à¦¤ à¦•à¦°à§‡ à¦à¦¬à¦‚ à¦¸à¦®à¦¸à§à¦¤ à¦¦à§ƒà¦¶à§à¦¯à¦®à¦¾à¦¨ à¦•à¦¨à§à¦Ÿà§‡à¦¨à§à¦Ÿ à¦§à¦¾à¦°à¦£ à¦•à¦°à§‡" : "Defines the document's body and contains all visible contents like headings, paragraphs, images, links, tables, lists, etc."
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("code", {
									className: "shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded",
									children: "<h1>"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm leading-relaxed",
									children: isBangla ? "à¦à¦•à¦Ÿà¦¿ à¦¬à¦¡à¦¼ à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦® à¦¸à¦‚à¦œà§à¦žà¦¾à¦¯à¦¼à¦¿à¦¤ à¦•à¦°à§‡" : "Defines a large heading"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("code", {
									className: "shrink-0 text-blue-600 font-mono text-sm bg-slate-50 px-2 py-1 rounded",
									children: "<p>"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-sm leading-relaxed",
									children: isBangla ? "à¦à¦•à¦Ÿà¦¿ à¦…à¦¨à§à¦šà§à¦›à§‡à¦¦ à¦¸à¦‚à¦œà§à¦žà¦¾à¦¯à¦¼à¦¿à¦¤ à¦•à¦°à§‡" : "Defines a paragraph"
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ jsxs(Card, {
					className: "bg-white   border border-blue-100",
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-bold text-gray-800 mb-6",
							children: isBangla ? "HTML à¦à¦²à¦¿à¦®à§‡à¦¨à§à¦Ÿ à¦•à§€?" : "What is an HTML Element?"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-700 mb-6",
							children: isBangla ? "à¦à¦•à¦Ÿà¦¿ HTML à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨ à¦à¦•à¦Ÿà¦¿ à¦¸à§à¦Ÿà¦¾à¦°à§à¦Ÿ à¦Ÿà§à¦¯à¦¾à¦—, à¦•à¦¿à¦›à§ à¦•à¦¨à§à¦Ÿà§‡à¦¨à§à¦Ÿ à¦à¦¬à¦‚ à¦à¦•à¦Ÿà¦¿ à¦à¦¨à§à¦¡ à¦Ÿà§à¦¯à¦¾à¦— à¦¦à§à¦¬à¦¾à¦°à¦¾ à¦¸à¦‚à¦œà§à¦žà¦¾à¦¯à¦¼à¦¿à¦¤:" : "An HTML element is defined by a start tag, content, and an end tag:"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6 mb-6",
							children: /* @__PURE__ */ jsxs("code", {
								className: "font-mono text-lg text-gray-800",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-gray-500",
										children: "<"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-blue-600 font-semibold",
										children: "tagname"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-gray-500",
										children: ">"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-gray-700",
										children: " Content goes here... "
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-gray-500",
										children: "</"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-blue-600 font-semibold",
										children: "tagname"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-gray-500",
										children: ">"
									})
								]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ jsxs("table", {
								className: "w-full border-collapse",
								children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
									className: "bg-blue-600 text-white",
									children: [
										/* @__PURE__ */ jsx("th", {
											className: "p-3 text-left",
											children: isBangla ? "à¦¶à§à¦°à§ à¦Ÿà§à¦¯à¦¾à¦—" : "Start Tag"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "p-3 text-left",
											children: isBangla ? "à¦•à¦¨à§à¦Ÿà§‡à¦¨à§à¦Ÿ" : "Content"
										}),
										/* @__PURE__ */ jsx("th", {
											className: "p-3 text-left",
											children: isBangla ? "à¦¶à§‡à¦· à¦Ÿà§à¦¯à¦¾à¦—" : "End Tag"
										})
									]
								}) }), /* @__PURE__ */ jsxs("tbody", { children: [
									/* @__PURE__ */ jsxs("tr", {
										className: "border-b border-blue-100",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "p-3",
												children: /* @__PURE__ */ jsx("code", { children: "<h1>" })
											}),
											/* @__PURE__ */ jsx("td", {
												className: "p-3",
												children: isBangla ? "à¦†à¦®à¦¾à¦° à¦ªà§à¦°à¦¥à¦® à¦¶à¦¿à¦°à§‹à¦¨à¦¾à¦®" : "My First Heading"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "p-3",
												children: /* @__PURE__ */ jsx("code", { children: "</h1>" })
											})
										]
									}),
									/* @__PURE__ */ jsxs("tr", {
										className: "border-b border-blue-100",
										children: [
											/* @__PURE__ */ jsx("td", {
												className: "p-3",
												children: /* @__PURE__ */ jsx("code", { children: "<p>" })
											}),
											/* @__PURE__ */ jsx("td", {
												className: "p-3",
												children: isBangla ? "à¦†à¦®à¦¾à¦° à¦ªà§à¦°à¦¥à¦® à¦…à¦¨à§à¦šà§à¦›à§‡à¦¦" : "My First Paragraph"
											}),
											/* @__PURE__ */ jsx("td", {
												className: "p-3",
												children: /* @__PURE__ */ jsx("code", { children: "</p>" })
											})
										]
									}),
									/* @__PURE__ */ jsxs("tr", { children: [
										/* @__PURE__ */ jsx("td", {
											className: "p-3",
											children: /* @__PURE__ */ jsx("code", { children: "<br>" })
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-3 text-gray-500",
											children: "none"
										}),
										/* @__PURE__ */ jsx("td", {
											className: "p-3 text-gray-500",
											children: "none"
										})
									] })
								] })]
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs(Card, {
					className: "bg-white  border border-blue-100",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-6",
						children: [/* @__PURE__ */ jsx(Layout, { className: "w-7 h-7 text-blue-600" }), /* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-bold text-gray-800",
							children: isBangla ? "HTML à¦ªà§ƒà¦·à§à¦ à¦¾à¦° à¦•à¦¾à¦ à¦¾à¦®à§‹" : "HTML Page Structure"
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "border-2 border-blue-300 rounded-xl p-4 bg-blue-50 font-mono text-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mb-2",
								children: "<html>"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ml-4 border-2 border-blue-400 bg-white p-3 rounded mb-2",
								children: [
									/* @__PURE__ */ jsx("div", { children: "<head>" }),
									/* @__PURE__ */ jsx("div", {
										className: "ml-4 border border-blue-300 bg-blue-50 p-2 rounded my-1",
										children: "<title>Page title</title>"
									}),
									/* @__PURE__ */ jsx("div", { children: "</head>" })
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "ml-4 border-2 border-blue-400 bg-white p-3 rounded mb-2",
								children: [
									/* @__PURE__ */ jsx("div", { children: "<body>" }),
									/* @__PURE__ */ jsxs("div", {
										className: "ml-4 space-y-2 my-2",
										children: [/* @__PURE__ */ jsx("div", {
											className: "border border-blue-300 bg-blue-50 p-2 rounded",
											children: "<h1>This is a heading</h1>"
										}), /* @__PURE__ */ jsx("div", {
											className: "border border-blue-300 bg-blue-50 p-2 rounded",
											children: "<p>This is a paragraph.</p>"
										})]
									}),
									/* @__PURE__ */ jsx("div", { children: "</body>" })
								]
							}),
							/* @__PURE__ */ jsx("div", { children: "</html>" })
						]
					})]
				}),
				/* @__PURE__ */ jsxs(Card, {
					className: "bg-linear-to-br from-blue-600 to-blue-500 text-white ",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 mb-4",
						children: [/* @__PURE__ */ jsx(Chrome, { className: "w-8 h-8" }), /* @__PURE__ */ jsx("h3", {
							className: "text-2xl font-bold",
							children: isBangla ? "à¦“à¦¯à¦¼à§‡à¦¬ à¦¬à§à¦°à¦¾à¦‰à¦œà¦¾à¦°" : "Web Browsers"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-blue-50 text-lg",
						children: isBangla ? "à¦à¦•à¦Ÿà¦¿ à¦“à¦¯à¦¼à§‡à¦¬ à¦¬à§à¦°à¦¾à¦‰à¦œà¦¾à¦°à§‡à¦° à¦‰à¦¦à§à¦¦à§‡à¦¶à§à¦¯ à¦¹à¦² HTML à¦¡à¦•à§à¦®à§‡à¦¨à§à¦Ÿ à¦ªà¦¡à¦¼à¦¾ à¦à¦¬à¦‚ à¦¸à¦ à¦¿à¦•à¦­à¦¾à¦¬à§‡ à¦ªà§à¦°à¦¦à¦°à§à¦¶à¦¨ à¦•à¦°à¦¾à¥¤" : "A web browser's purpose is to read HTML documents and display them correctly."
					})]
				})
			]
		})
	});
}
var Introduction_default = Introduction;
function ComingSoonPage({ title = "CSS", titleBn = "", color = "#1572B6", tagline = "", taglineBn = "" }) {
	const isBangla = useSelector((state) => state.htmlStore.language) === "BN";
	return /* @__PURE__ */ jsx("div", {
		className: "max-w-4xl mx-auto sm:px-8 py-10",
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 40
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .6,
				ease: "easeOut"
			},
			className: "rounded-2xl bg-white p-10 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/70",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "mx-auto grid h-20 w-20 place-items-center rounded-2xl shadow-lg",
					style: {
						backgroundColor: color,
						color: title === "JavaScript" ? "#1E293B" : "#FFFFFF"
					},
					children: /* @__PURE__ */ jsx(Code2, { className: "h-10 w-10" })
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-4xl font-bold text-gray-800 mt-6",
					children: isBangla ? titleBn || title : title
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-lg text-gray-500 mt-1",
					children: isBangla ? taglineBn || tagline : tagline
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-2 rounded-full",
					children: [/* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }), isBangla ? "à¦¶à§€à¦˜à§à¦°à¦‡ à¦†à¦¸à¦›à§‡" : "Coming soon"]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-gray-600 mt-6 max-w-xl mx-auto",
					children: isBangla ? "à¦à¦‡ à¦…à¦‚à¦¶à¦Ÿà¦¿ à¦à¦–à¦¨à§‹ à¦¤à§ˆà¦°à¦¿ à¦¹à¦šà§à¦›à§‡à¥¤ à¦¤à¦¤à¦•à§à¦·à¦£à§‡ HTML à¦—à¦¾à¦‡à¦¡ à¦¦à¦¿à¦¯à¦¼à§‡ à¦¶à§à¦°à§ à¦•à¦°à§à¦¨!" : "This section is still being built. Start with the HTML guide in the meantime!"
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/html",
					className: "inline-flex items-center gap-2 mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition",
					children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }), isBangla ? "HTML à¦—à¦¾à¦‡à¦¡à§‡ à¦¯à¦¾à¦¨" : "Go to HTML Guide"]
				})
			]
		})
	});
}
var ComingSoonPage_default = ComingSoonPage;
function ErrorPage() {
	return /* @__PURE__ */ jsx("div", {
		className: " overflow-hidden",
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 50
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .6,
				ease: "easeOut"
			},
			className: "flex flex-col items-center justify-center min-h-[85vh]  px-4 text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-9xl font-extrabold text-blue-600 mb-6",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "text-3xl font-bold text-gray-800 mb-4",
					children: "Page Not Found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-gray-600 mb-8",
					children: "Sorry, the page you are looking for does not exist or has been moved."
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition",
					children: "Go Back Home"
				})
			]
		})
	});
}
const HtmlPage = () => {
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-col gap-4 w-full",
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
};
var routes = [{
	path: "/",
	element: /* @__PURE__ */ jsx(App_default, {}),
	children: [
		{
			index: true,
			element: /* @__PURE__ */ jsx(HomePage_default, {})
		},
		{
			path: "html",
			element: /* @__PURE__ */ jsx(HtmlPage, {}),
			children: [{
				index: true,
				element: /* @__PURE__ */ jsx(Introduction_default, {})
			}]
		},
		{
			path: "css",
			element: /* @__PURE__ */ jsx(ComingSoonPage_default, {
				title: "CSS",
				color: "#1572B6"
			})
		},
		{
			path: "js",
			element: /* @__PURE__ */ jsx(ComingSoonPage_default, {
				title: "JavaScript",
				color: "#F7DF1E"
			})
		},
		{
			path: "*",
			element: /* @__PURE__ */ jsx(ErrorPage, {})
		}
	]
}];
for (const url of [
	"/",
	"/html",
	"/css",
	"/js",
	"/not-a-page"
]) {
	const router = createMemoryRouter(routes, { initialEntries: [url] });
	const html = renderToStaticMarkup(/* @__PURE__ */ jsx(Provider, {
		store,
		children: /* @__PURE__ */ jsx(RouterProvider, { router })
	}));
	const has = (t) => html.includes(t) ? "YES" : "no ";
	console.log(url.padEnd(14), `len=${String(html.length).padEnd(7)}`, `cards[HTML/CSS/JS]=${has("HTML")}${has("CSS")}/${has("JavaScript")}`.padEnd(22), `404=${has("Page Not Found")}`, `comingSoon=${has("শীঘ্রই আসছে")}`, `intro=${has("সহজ HTML ডকুমেন্ট")}`);
}
console.log("SSR smoke test OK");
export {};

