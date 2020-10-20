import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Layout } from '../components/Layout'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <Layout>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }
          const errorMsg = error && 'The user already exists or there is a problem with your credentials'
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title='Sign up'
              onSubmit={onSubmit}
            />
          )
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onLogin = ({ email, password }) => {
            const input = { email, password }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }
          const errorMsg =
            error && 'The password is not correct or the user does not exist'
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title='Log in'
              onSubmit={onLogin}
            />
          )
        }}
      </LoginMutation>
    </Layout>
  )
}
