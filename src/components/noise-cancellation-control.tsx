'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { aiNoiseCancellation } from '@/ai/flows/ai-noise-cancellation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// A placeholder for a short, silent audio clip in Data URI format.
const DUMMY_AUDIO_URI =
  'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';

export default function NoiseCancellationControl() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleNoiseCancellation = async () => {
    setIsProcessing(true);
    try {
      // In a real app, you would get audio data from the microphone.
      // Here, we use a dummy URI to demonstrate the AI flow.
      const result = await aiNoiseCancellation({
        audioDataUri: DUMMY_AUDIO_URI,
      });

      if (result.cleanedAudioDataUri) {
        toast({
          title: 'AI Noise Cancellation',
          description: 'Background noise is now being reduced.',
        });
        // In a real implementation, you would apply this cleaned audio stream.
      } else {
        throw new Error('Failed to process audio.');
      }
    } catch (error) {
      console.error('Noise cancellation error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not apply noise cancellation.',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            size="lg"
            className="h-16 w-16 rounded-full"
            onClick={handleNoiseCancellation}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Sparkles className="text-yellow-400" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>AI Noise Cancellation</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
