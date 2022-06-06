import http from "./http-commom"
//seguimos el uppercamercase
class TutorialsApiService{
  getAll(){
    return http.get("/tutorials");
  }
  getById(id){
    return http.get(`/tutorials/${id}`);
  }
}

export default new TutorialsApiService();