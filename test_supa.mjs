import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gxwxfnvdoswtjrwvflql.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4d3hmbnZkb3N3dGpyd3ZmbHFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMDY3NzAsImV4cCI6MjA4OTY4Mjc3MH0.ATVF1n5zZGLbnwE5H_oQCZWSpS5hGHP4Dl4FuMJmLDY'
const supabase = createClient(supabaseUrl, supabaseKey)

async function run() {
    const emails = ['siddhant273131@gmail.com', 'siddant273131@gmail.com']
    for (const email of emails) {
        console.log(`\nTrying login with ${email}...`)
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email,
            password: 'admin123'
        })

        if (authError) {
            console.log('Login failed:', authError.message)
            continue
        }

        console.log('Logged in as', authData.user.id)

        const { data: profile } = await supabase.from('profiles').select('role').eq('id', authData.user.id).single()
        console.log('Profile Role:', profile?.role)

        const { data: isAdminRpc } = await supabase.rpc('is_admin')
        console.log('is_admin RPC returned:', isAdminRpc)

        const { data: products } = await supabase.from('products').select('id').limit(1)
        if (products.length === 0) {
            console.log('No products to delete!')
            break
        }
        const realId = products[0].id
        console.log('Attempting update operation on real product:', realId)

        // Test UPDATE
        const { data: updateData, error: updateError } = await supabase
            .from('products')
            .update({ is_featured: true })
            .eq('id', realId)
            .select()

        console.log('Update result -> data:', updateData, 'error:', updateError)

        console.log('Attempting delete operation on real product:', realId)

        const { data: deleteData, error, count } = await supabase
            .from('products')
            .delete({ count: 'exact' })
            .eq('id', realId)
            .select()

        console.log('Delete result -> data:', deleteData, 'count:', count, 'error:', error)

        await supabase.auth.signOut()
        break
    }
}

run().catch(console.error)
