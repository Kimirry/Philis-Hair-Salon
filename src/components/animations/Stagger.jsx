import { motion } from "framer-motion";

export default function Stagger({
 children
}) {

return (

<motion.div
initial="hidden"
whileInView="visible"
viewport={{
 once:true
}}
variants={{
 visible:{
 transition:{
 staggerChildren:0.15
 }
}
}}
>

{children}

</motion.div>

)

}
