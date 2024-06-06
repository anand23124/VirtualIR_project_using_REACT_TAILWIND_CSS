import { resourcesLinks } from "../constants"
import { platformLinks } from "../constants"
import { communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h3 className="text-md font-semibold mb-4">Resouces</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((items,index)=>(
                        <li key={index}><a href={items.href}>{items.text}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                    {platformLinks.map((items,index)=>(
                        <li key={index}><a href={items.href}>{items.text}</a></li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((items,index)=>(
                        <li key={index}><a href={items.href}>{items.text}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer