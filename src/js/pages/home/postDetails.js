import renderDetails from "../../utils/posts/renderDetails.js";
import navbar from "../../components/navbar.js";
import sidebar from "../../components/sidebar.js";

const id = new URLSearchParams(window.location.search).get("id");

navbar();
sidebar();
renderDetails(id);
