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
import {useShortenUrl} from "@/urls/useShortenUrl.tsx";

const shortenUrlSchema = z.object({
    url: z.string().url({
        message: "Please enter a valid URL",
    }),
});

export const GuestShortenUrlForm = () => {
    const form = useForm<z.infer<typeof shortenUrlSchema>>({
        resolver: zodResolver(shortenUrlSchema),
        defaultValues: {
            url: ""
        }
    })
    const {shortenUrl} = useShortenUrl();

    const onSubmit = (data: z.infer<typeof shortenUrlSchema>) => {
        shortenUrl(data.url);
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
                <Button type="submit">Shorten URL</Button>
            </form>
        </Form>
    );
};
