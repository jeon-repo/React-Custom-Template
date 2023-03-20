// 괄호 안에 포함된 권한 허용
// guest가 [] 인 경우 권한이 [] 인 유저만 접근 가능 -> owner, admin 접근 불가
// guest가 ['owner', 'admin', null] 인 경우 어떤 권한이든 접근 가능
const authRoles = {
  owner: ['owner'],
  admin: ['owner', 'admin'],
  guest: [],
};

export default authRoles;
