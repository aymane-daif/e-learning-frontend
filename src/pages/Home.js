
import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import hasRoles from "../security/hasRoles";
import HomeInstructor from "./Home/HomeInstructor";
import HomeStudent from "./Home/HomeStudent";

function Home(){
    const { keycloak } = useKeycloak();
    const isStudent = hasRoles(["STUDENT"],keycloak);
    return isStudent ? <HomeInstructor />:<HomeInstructor />;

}

export default Home;