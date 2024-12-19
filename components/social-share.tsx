import { Facebook, Twitter, Linkedin, Mail, Link } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SocialShare() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const title = "Dzaleka Refugee Information Hub"

  const shareActions = [
    { name: 'Facebook', icon: Facebook, action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank') },
    { name: 'Twitter', icon: Twitter, action: () => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`, '_blank') },
    { name: 'LinkedIn', icon: Linkedin, action: () => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`, '_blank') },
    { name: 'Email', icon: Mail, action: () => window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this information about Dzaleka Refugee Camp: ${shareUrl}`)}` },
    { name: 'Copy Link', icon: Link, action: () => {
      navigator.clipboard.writeText(shareUrl).then(() => {
        toast({
          title: "Link copied",
          description: "The link has been copied to your clipboard.",
        })
      })
    }},
  ]

  return (
    <TooltipProvider>
      <div className="flex space-x-2">
        {shareActions.map((action, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={action.action}>
                <action.icon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{action.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

