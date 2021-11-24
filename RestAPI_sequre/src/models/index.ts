import User from './User'
import Role from './Role'

User.belongsTo(Role)
Role.hasMany(User)

export { User, Role }





