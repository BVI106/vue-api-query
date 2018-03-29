/**
 *  Provide static calls for all methods.
 * 
 *  Instead this: let users = new User().with('country').get()
 *  We can do this: let users = User.with('conutry').get()
 * 
 */

export default class StaticModel {

  static instance () {
    return new this
  }

  static custom (resource) {
    let self = this.instance()
    self.custom(resource)

    return self
  }

  static include (...args) {
    let self = this.instance()
    self.include(...args)

    return self
  }

  static where (field, value) {
    let self = this.instance()
    self.where(field, value)

    return self
  }

  static whereIn (field, array) {
    let self = this.instance()
    self.whereIn(field, array)

    return self
  }

  static append (...args) {
    let self = this.instance()
    self.append(...args)

    return self
  }

  static orderBy (...args) {
    let self = this.instance()
    self.orderBy(...args)

    return self
  }

  static first () {
    let self = this.instance()

    return self.first()
  }

  static find (id) {
    let self = this.instance()

    return self.find(id)
  }

  static get () {
    let self = this.instance()

    return self.get()
  }
}