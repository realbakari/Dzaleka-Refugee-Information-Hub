"use client"

import { useToast } from "@/hooks/use-toast"
import { Facebook, Twitter, Linkedin, Mail, Link } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SocialShare() {
  const { toast } = useToast()
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const title = "Dzaleka Refugee Information Hub"

  const shareActions = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`)
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      action: () => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`)
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      action: () => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${title}`)
    },
    { 
      name: 'Email', 
      icon: Mail, 
      action: () => window.open(`mailto:?subject=${title}&body=${shareUrl}`)
    },
    { 
      name: 'Copy Link', 
      icon: Link, 
      action: () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
          toast({
            title: "Link copied",
            description: "The link has been copied to your clipboard.",
          })
        })
      }
    },
  ]

  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {shareActions.map((action) => (
          <Tooltip key={action.name}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={action.action}
                className="h-9 w-9"
              >
                <action.icon className="h-4 w-4" />
                <span className="sr-only">{action.name}</span>
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