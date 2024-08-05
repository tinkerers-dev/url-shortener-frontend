import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useShortenUrl} from "@/urls/useShortenUrl.ts";
import {useState} from "react";

const shortenUrlSchema = z.object({
    url: z.string().url({
        message: "Please enter a valid URL",
    }),
});

export const GuestShortenUrlForm = () => {
    const [shortUrl, setShortUrl] = useState("")
    const form = useForm<z.infer<typeof shortenUrlSchema>>({
        resolver: zodResolver(shortenUrlSchema),
        defaultValues: {
            url: ""
        }
    })
    const {shortenUrl} = useShortenUrl();

    const onSubmit = async (data: z.infer<typeof shortenUrlSchema>) => {
        const shortenedUrl = await shortenUrl(data.url);

        setShortUrl(shortenedUrl.shortUrl);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="url"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>URL to shorten</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the URL you want to shorten.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {shortUrl && (
                    <div>
                        <FormMessage>{shortUrl}</FormMessage>
                    </div>
                )}
                <Button type="submit">Shorten URL</Button>
            </form>
        </Form>
    );
};
