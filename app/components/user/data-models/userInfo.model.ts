export class UserInfoModel
{
  guid: string = "";
	uid: string = "";
	
	first_name: string = "";
	last_name: string = "";

	email: string = "";
	zipcode: string = "";

	password: string = "";


	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
  private user1 = new UserInfoModel(
    {
      id: "1", 
      guid: "D21ds12x", 
      uid: "cust2dsa12dsa", 
      first_name: "John", 
      last_name: "Doe", 
      email: "email@email.com", 
      zipcode: 10283,
      password: "Idasn2x2#",
      avatar: "https://avatars.githubusercontent.com/u/359395?v=4",
    });
  get getOne(): UserInfoModel {
    return this.user1;
  }
  get getAll(): UserInfoModel[] {
    return [
      this.user1
    ];
  }
}