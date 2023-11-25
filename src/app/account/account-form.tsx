'use client'
import { useCallback, useEffect, useState } from 'react'
import Avatar from './avatar'
import { Database } from '../database.types'
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState<string | null>(null)
  const [lastname, setLastName] = useState<string | null>(null)
  const [username, SetUsername] = useState<string | null>(null)
  const [phone, SetPhone] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)
  const user = session?.user

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`name, lastname, username, avatar_url, phone`)
        .eq('id', user?.id || '')
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setName(data.name)
        setLastName(data.lastname)
        SetUsername(data.username)
        setAvatarUrl(data.avatar_url)
        SetPhone(data.phone)
      }
    } catch (error) {
      alert('Error al cargar información del usuario!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    lastname,
    name,
    username,
    avatar_url,
    phone,
  }: {
    lastname: string | null;
    name: string | null;
    username: string | null;
    avatar_url: string | null;
    phone: string | null;
  }) {
    try {
      setLoading(true);
  
      let { error } = await supabase.from('profiles').upsert({
        id: user?.id || '',
        name: name,
        lastname,
        username,
        avatar_url,
        phone,
        updated_at: new Date().toISOString(),
      });
  
      if (error) throw error;
      alert('Profile updated!');
    } catch (error) {
      alert('Error updating the data!');
    } finally {
      setLoading(false);
    }
  }
  
  

  return (
    <div className="form-widget">
      <Avatar
        uid={user?.id || " "}
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url)
          updateProfile({ name, lastname, username, avatar_url, phone: url })
        }}
      />
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session?.user.email} disabled />
      </div>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          value={name || ''}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastname">Apellido</label>
        <input
          id="lastname"
          type="text"
          value={lastname || ''}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => SetUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone">Teléfono</label>
        <input
          id="phone"
          type="text"
          value={phone || ''}
          onChange={(e) => SetPhone(e.target.value)}
        />
      </div>
        

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ name, lastname, username, avatar_url, phone })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  )
}