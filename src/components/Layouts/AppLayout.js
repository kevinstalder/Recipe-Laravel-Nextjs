import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main>{children}</main>

             {/* Footer */}
            <footer class="text-center text-white" style="background-color: #0a4275;">
              <div class="container p-6">
                <div class="">
                  <p class="flex justify-center items-center">
                    <span class="mr-4">Register for free</span>
                    <button type="button" class="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                      Sign up!
                    </button>
                  </p>
                </div> 
              </div>

              <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.2);">
                © {new Date('Y')} Developed with <a href="https://laravel.com/" target="_Blank">Laravel 9.x for backend API</a>, <a href="https://github.com/laravel/breeze-next" target="_Blank">Laravel Breeze + Next.js framework</a>, <a href="https://nextjs.org/" target="_Blank">Next JS + React for frontend</a> 
              </div>
            </footer>
        </div>
    )
}

export default AppLayout
