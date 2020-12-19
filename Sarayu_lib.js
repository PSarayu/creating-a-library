function touch(r,u){
    if (u.x - r.x < r.width/2 + u.width/2
      && r.x - u.x < r.width/2 + u.width/2
      && u.y - r.y < r.height/2 + u.height/2
      && r.y - u.y < r.height/2 + u.height/2) {
     return true
  }
  else {
    return false
  }
  }