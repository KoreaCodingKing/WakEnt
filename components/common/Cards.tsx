import { motion, Variants } from "framer-motion";
import { CSSProperties, ReactNode } from "react";
import { classes } from "../../utils/class";
import styles from '../../styles/components/gomem/DetailUnitPage.module.scss';

type ColumnRowType = number | 'auto'
type CardTemplateString =
  `${ColumnRowType} ${ColumnRowType} ${ColumnRowType} ${ColumnRowType}`

interface CardStyles extends CSSProperties {
  '--cs': string
  '--ce': string
  '--rs': string
  '--re': string
  '--csm': string
  '--cem': string
  '--rsm': string
  '--rem': string
}

interface CardProps {
  index?: number
  padding?: boolean
  children: ReactNode
  className?: string
  template?: CardTemplateString
  mobileTemplate?: CardTemplateString
  normalSize?: boolean
  flex?: boolean
  flexColumn?: boolean
  center?: boolean
  thumbnail?: boolean
  centerColumn?: boolean
}

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    rotateX: 30,
    rotateY: -20,
  },
  visible: (custom) => ({
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    transition: {
      delay: (custom + 1) * 0.06,
      type: 'spring',
      stiffness: 100,
      damping: 6,
    },
  }),
  hover: {
    scale: 0.95,
  },
};

export const Card = ({
  index = 0,
  children,
  padding,
  flex,
  className,
  template,
  mobileTemplate,
  normalSize,
  flexColumn,
  thumbnail,
  center,
  centerColumn
}: CardProps) => {
  const templateArray = template && template.split(' ');
  const mobileTemplateArray = mobileTemplate && mobileTemplate.split(' ');

  return (
    <motion.div
      custom={index}
      initial="initial"
      animate="visible"
      variants={cardVariants}
      className={classes(
        styles.card,
        padding && styles.padding,
        flex && styles.flex,
        normalSize && styles.normalSize,
        flexColumn && styles.flexColumn,
        thumbnail && styles.thumbnail,
        className
      )}
      whileHover="hover"
      style={
        templateArray
          ? ({
            transform: 'translateX(0)',
            '--cs': templateArray[0],
            '--ce': templateArray[1],
            '--rs': templateArray[2],
            '--re': templateArray[3],
            '--csm': mobileTemplateArray && mobileTemplateArray[0],
            '--cem': mobileTemplateArray && mobileTemplateArray[1],
            '--rsm': mobileTemplateArray && mobileTemplateArray[2],
            '--rem': mobileTemplateArray && mobileTemplateArray[3],
          } as CardStyles)
          : {
            transform: 'translateX(0)',
          }
      }
    >
      {center ? (
        <div
          className={classes(
            styles.center,
            centerColumn && styles.centerColumn
          )}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
};