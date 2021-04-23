var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2990 = root || request.c( 'UnityEngine.JointSpring' )
  var i2991 = data
  i2990.spring = i2991[0]
  i2990.damper = i2991[1]
  i2990.targetPosition = i2991[2]
  return i2990
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2992 = root || request.c( 'UnityEngine.JointMotor' )
  var i2993 = data
  i2992.m_TargetVelocity = i2993[0]
  i2992.m_Force = i2993[1]
  i2992.m_FreeSpin = i2993[2]
  return i2992
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2994 = root || request.c( 'UnityEngine.JointLimits' )
  var i2995 = data
  i2994.m_Min = i2995[0]
  i2994.m_Max = i2995[1]
  i2994.m_Bounciness = i2995[2]
  i2994.m_BounceMinVelocity = i2995[3]
  i2994.m_ContactDistance = i2995[4]
  i2994.minBounce = i2995[5]
  i2994.maxBounce = i2995[6]
  return i2994
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2996 = root || request.c( 'UnityEngine.JointDrive' )
  var i2997 = data
  i2996.m_PositionSpring = i2997[0]
  i2996.m_PositionDamper = i2997[1]
  i2996.m_MaximumForce = i2997[2]
  return i2996
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2998 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2999 = data
  i2998.m_Spring = i2999[0]
  i2998.m_Damper = i2999[1]
  return i2998
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3000 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3001 = data
  i3000.m_Limit = i3001[0]
  i3000.m_Bounciness = i3001[1]
  i3000.m_ContactDistance = i3001[2]
  return i3000
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3002 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3003 = data
  i3002.m_ExtremumSlip = i3003[0]
  i3002.m_ExtremumValue = i3003[1]
  i3002.m_AsymptoteSlip = i3003[2]
  i3002.m_AsymptoteValue = i3003[3]
  i3002.m_Stiffness = i3003[4]
  return i3002
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3004 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3005 = data
  i3004.m_LowerAngle = i3005[0]
  i3004.m_UpperAngle = i3005[1]
  return i3004
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3006 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3007 = data
  i3006.m_MotorSpeed = i3007[0]
  i3006.m_MaximumMotorTorque = i3007[1]
  return i3006
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3008 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3009 = data
  i3008.m_DampingRatio = i3009[0]
  i3008.m_Frequency = i3009[1]
  i3008.m_Angle = i3009[2]
  return i3008
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3010 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3011 = data
  i3010.m_LowerTranslation = i3011[0]
  i3010.m_UpperTranslation = i3011[1]
  return i3010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3012 = root || new pc.UnityMaterial()
  var i3013 = data
  i3012.name = i3013[0]
  request.r(i3013[1], i3013[2], 0, i3012, 'shader')
  i3012.renderQueue = i3013[3]
  i3012.enableInstancing = !!i3013[4]
  var i3015 = i3013[5]
  var i3014 = []
  for(var i = 0; i < i3015.length; i += 1) {
    i3014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3015[i + 0]) );
  }
  i3012.floatParameters = i3014
  var i3017 = i3013[6]
  var i3016 = []
  for(var i = 0; i < i3017.length; i += 1) {
    i3016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3017[i + 0]) );
  }
  i3012.colorParameters = i3016
  var i3019 = i3013[7]
  var i3018 = []
  for(var i = 0; i < i3019.length; i += 1) {
    i3018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3019[i + 0]) );
  }
  i3012.vectorParameters = i3018
  var i3021 = i3013[8]
  var i3020 = []
  for(var i = 0; i < i3021.length; i += 1) {
    i3020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3021[i + 0]) );
  }
  i3012.textureParameters = i3020
  var i3023 = i3013[9]
  var i3022 = []
  for(var i = 0; i < i3023.length; i += 1) {
    i3022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3023[i + 0]) );
  }
  i3012.materialFlags = i3022
  return i3012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3027 = data
  i3026.name = i3027[0]
  i3026.value = i3027[1]
  return i3026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3031 = data
  i3030.name = i3031[0]
  i3030.value = new pc.Color(i3031[1], i3031[2], i3031[3], i3031[4])
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3035 = data
  i3034.name = i3035[0]
  i3034.value = new pc.Vec4( i3035[1], i3035[2], i3035[3], i3035[4] )
  return i3034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3039 = data
  i3038.name = i3039[0]
  request.r(i3039[1], i3039[2], 0, i3038, 'value')
  return i3038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3043 = data
  i3042.name = i3043[0]
  i3042.enabled = !!i3043[1]
  return i3042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3045 = data
  i3044.position = new pc.Vec3( i3045[0], i3045[1], i3045[2] )
  i3044.scale = new pc.Vec3( i3045[3], i3045[4], i3045[5] )
  i3044.rotation = new pc.Quat(i3045[6], i3045[7], i3045[8], i3045[9])
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3047 = data
  i3046.enabled = !!i3047[0]
  i3046.isTrigger = !!i3047[1]
  request.r(i3047[2], i3047[3], 0, i3046, 'material')
  i3046.center = new pc.Vec3( i3047[4], i3047[5], i3047[6] )
  i3046.radius = i3047[7]
  return i3046
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i3048 = root || request.c( 'UnselectedColliderDrawer' )
  var i3049 = data
  return i3048
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i3050 = root || request.c( 'WheatPieceDestroyer' )
  var i3051 = data
  return i3050
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i3052 = root || request.c( 'WheatPieceRandomizer' )
  var i3053 = data
  request.r(i3053[0], i3053[1], 0, i3052, 'partsParent')
  return i3052
}

Deserializers["DisableIfTooFar"] = function (request, data, root) {
  var i3054 = root || request.c( 'DisableIfTooFar' )
  var i3055 = data
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3057 = data
  request.r(i3057[0], i3057[1], 0, i3056, 'sharedMesh')
  return i3056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3059 = data
  request.r(i3059[0], i3059[1], 0, i3058, 'additionalVertexStreams')
  i3058.enabled = !!i3059[2]
  request.r(i3059[3], i3059[4], 0, i3058, 'sharedMaterial')
  var i3061 = i3059[5]
  var i3060 = []
  for(var i = 0; i < i3061.length; i += 2) {
  request.r(i3061[i + 0], i3061[i + 1], 2, i3060, '')
  }
  i3058.sharedMaterials = i3060
  i3058.receiveShadows = !!i3059[6]
  i3058.shadowCastingMode = i3059[7]
  i3058.sortingLayerID = i3059[8]
  i3058.sortingOrder = i3059[9]
  i3058.lightmapIndex = i3059[10]
  i3058.lightmapSceneIndex = i3059[11]
  i3058.lightmapScaleOffset = new pc.Vec4( i3059[12], i3059[13], i3059[14], i3059[15] )
  i3058.lightProbeUsage = i3059[16]
  i3058.reflectionProbeUsage = i3059[17]
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3065 = data
  i3064.name = i3065[0]
  i3064.tag = i3065[1]
  i3064.enabled = !!i3065[2]
  i3064.isStatic = !!i3065[3]
  i3064.layer = i3065[4]
  return i3064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3067 = data
  i3066.name = i3067[0]
  i3066.halfPrecision = !!i3067[1]
  i3066.vertexCount = i3067[2]
  i3066.aabb = i3067[3]
  var i3069 = i3067[4]
  var i3068 = []
  for(var i = 0; i < i3069.length; i += 1) {
    i3068.push( !!i3069[i + 0] );
  }
  i3066.streams = i3068
  i3066.vertices = i3067[5]
  var i3071 = i3067[6]
  var i3070 = []
  for(var i = 0; i < i3071.length; i += 1) {
    i3070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3071[i + 0]) );
  }
  i3066.subMeshes = i3070
  var i3073 = i3067[7]
  var i3072 = []
  for(var i = 0; i < i3073.length; i += 16) {
    i3072.push( new pc.Mat4().setData(i3073[i + 0], i3073[i + 1], i3073[i + 2], i3073[i + 3],  i3073[i + 4], i3073[i + 5], i3073[i + 6], i3073[i + 7],  i3073[i + 8], i3073[i + 9], i3073[i + 10], i3073[i + 11],  i3073[i + 12], i3073[i + 13], i3073[i + 14], i3073[i + 15]) );
  }
  i3066.bindposes = i3072
  var i3075 = i3067[8]
  var i3074 = []
  for(var i = 0; i < i3075.length; i += 1) {
    i3074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3075[i + 0]) );
  }
  i3066.blendShapes = i3074
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3081 = data
  i3080.triangles = i3081[0]
  return i3080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3087 = data
  i3086.name = i3087[0]
  var i3089 = i3087[1]
  var i3088 = []
  for(var i = 0; i < i3089.length; i += 1) {
    i3088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3089[i + 0]) );
  }
  i3086.frames = i3088
  return i3086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3091 = data
  i3090.name = i3091[0]
  i3090.width = i3091[1]
  i3090.height = i3091[2]
  i3090.mipmapCount = i3091[3]
  i3090.anisoLevel = i3091[4]
  i3090.filterMode = i3091[5]
  i3090.hdr = !!i3091[6]
  i3090.format = i3091[7]
  i3090.wrapMode = i3091[8]
  i3090.alphaIsTransparency = !!i3091[9]
  i3090.alphaSource = i3091[10]
  return i3090
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i3092 = root || request.c( 'DamagingObstacle' )
  var i3093 = data
  request.r(i3093[0], i3093[1], 0, i3092, 'parts')
  i3092.m_damage = i3093[2]
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3095 = data
  i3094.enabled = !!i3095[0]
  request.r(i3095[1], i3095[2], 0, i3094, 'sharedMaterial')
  var i3097 = i3095[3]
  var i3096 = []
  for(var i = 0; i < i3097.length; i += 2) {
  request.r(i3097[i + 0], i3097[i + 1], 2, i3096, '')
  }
  i3094.sharedMaterials = i3096
  i3094.receiveShadows = !!i3095[4]
  i3094.shadowCastingMode = i3095[5]
  i3094.sortingLayerID = i3095[6]
  i3094.sortingOrder = i3095[7]
  i3094.lightmapIndex = i3095[8]
  i3094.lightmapSceneIndex = i3095[9]
  i3094.lightmapScaleOffset = new pc.Vec4( i3095[10], i3095[11], i3095[12], i3095[13] )
  i3094.lightProbeUsage = i3095[14]
  i3094.reflectionProbeUsage = i3095[15]
  request.r(i3095[16], i3095[17], 0, i3094, 'mesh')
  i3094.meshCount = i3095[18]
  i3094.activeVertexStreamsCount = i3095[19]
  i3094.alignment = i3095[20]
  i3094.renderMode = i3095[21]
  i3094.sortMode = i3095[22]
  i3094.lengthScale = i3095[23]
  i3094.velocityScale = i3095[24]
  i3094.cameraVelocityScale = i3095[25]
  i3094.normalDirection = i3095[26]
  i3094.sortingFudge = i3095[27]
  i3094.minParticleSize = i3095[28]
  i3094.maxParticleSize = i3095[29]
  i3094.pivot = new pc.Vec3( i3095[30], i3095[31], i3095[32] )
  request.r(i3095[33], i3095[34], 0, i3094, 'trailMaterial')
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3099 = data
  i3098.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3099[0], i3098.main)
  i3098.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3099[1], i3098.colorBySpeed)
  i3098.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3099[2], i3098.colorOverLifetime)
  i3098.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3099[3], i3098.emission)
  i3098.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3099[4], i3098.rotationBySpeed)
  i3098.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3099[5], i3098.rotationOverLifetime)
  i3098.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3099[6], i3098.shape)
  i3098.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3099[7], i3098.sizeBySpeed)
  i3098.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3099[8], i3098.sizeOverLifetime)
  i3098.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3099[9], i3098.textureSheetAnimation)
  i3098.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3099[10], i3098.velocityOverLifetime)
  i3098.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3099[11], i3098.noise)
  i3098.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3099[12], i3098.inheritVelocity)
  i3098.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3099[13], i3098.forceOverLifetime)
  i3098.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3099[14], i3098.limitVelocityOverLifetime)
  i3098.useAutoRandomSeed = !!i3099[15]
  i3098.randomSeed = i3099[16]
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3100 = root || new pc.ParticleSystemMain()
  var i3101 = data
  i3100.duration = i3101[0]
  i3100.loop = !!i3101[1]
  i3100.prewarm = !!i3101[2]
  i3100.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[3], i3100.startDelay)
  i3100.startDelayMultiplier = i3101[4]
  i3100.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[5], i3100.startLifetime)
  i3100.startLifetimeMultiplier = i3101[6]
  i3100.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[7], i3100.startSpeed)
  i3100.startSpeedMultiplier = i3101[8]
  i3100.startSize3D = !!i3101[9]
  i3100.startSize = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[10], i3100.startSize)
  i3100.startSizeMultiplier = i3101[11]
  i3100.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[12], i3100.startSizeX)
  i3100.startSizeXMultiplier = i3101[13]
  i3100.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[14], i3100.startSizeY)
  i3100.startSizeYMultiplier = i3101[15]
  i3100.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[16], i3100.startSizeZ)
  i3100.startSizeZMultiplier = i3101[17]
  i3100.startRotation3D = !!i3101[18]
  i3100.startRotation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[19], i3100.startRotation)
  i3100.startRotationMultiplier = i3101[20]
  i3100.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[21], i3100.startRotationX)
  i3100.startRotationXMultiplier = i3101[22]
  i3100.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[23], i3100.startRotationY)
  i3100.startRotationYMultiplier = i3101[24]
  i3100.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[25], i3100.startRotationZ)
  i3100.startRotationZMultiplier = i3101[26]
  i3100.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3101[27], i3100.startColor)
  i3100.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3101[28], i3100.gravityModifier)
  i3100.gravityModifierMultiplier = i3101[29]
  i3100.simulationSpace = i3101[30]
  request.r(i3101[31], i3101[32], 0, i3100, 'customSimulationSpace')
  i3100.simulationSpeed = i3101[33]
  i3100.useUnscaledTime = !!i3101[34]
  i3100.scalingMode = i3101[35]
  i3100.playOnAwake = !!i3101[36]
  i3100.maxParticles = i3101[37]
  i3100.emitterVelocityMode = i3101[38]
  return i3100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3102 = root || new pc.MinMaxCurve()
  var i3103 = data
  i3102.m_Mode = i3103[0]
  i3102.m_CurveMin = new pc.AnimationCurve( { keys_flow: i3103[1] } )
  i3102.m_CurveMax = new pc.AnimationCurve( { keys_flow: i3103[2] } )
  i3102.m_CurveMultiplier = i3103[3]
  i3102.m_ConstantMin = i3103[4]
  i3102.m_ConstantMax = i3103[5]
  return i3102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3104 = root || new pc.MinMaxGradient()
  var i3105 = data
  i3104.m_Mode = i3105[0]
  i3104.m_GradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3105[1], i3104.m_GradientMin)
  i3104.m_GradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3105[2], i3104.m_GradientMax)
  i3104.m_ColorMin = new pc.Color(i3105[3], i3105[4], i3105[5], i3105[6])
  i3104.m_ColorMax = new pc.Color(i3105[7], i3105[8], i3105[9], i3105[10])
  return i3104
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3107 = data
  i3106.mode = i3107[0]
  var i3109 = i3107[1]
  var i3108 = []
  for(var i = 0; i < i3109.length; i += 1) {
    i3108.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3109[i + 0]) );
  }
  i3106.colorKeys = i3108
  var i3111 = i3107[2]
  var i3110 = []
  for(var i = 0; i < i3111.length; i += 1) {
    i3110.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3111[i + 0]) );
  }
  i3106.alphaKeys = i3110
  return i3106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3112 = root || new pc.ParticleSystemColorBySpeed()
  var i3113 = data
  i3112.enabled = !!i3113[0]
  i3112.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3113[1], i3112.color)
  i3112.range = new pc.Vec2( i3113[2], i3113[3] )
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3117 = data
  i3116.color = new pc.Color(i3117[0], i3117[1], i3117[2], i3117[3])
  i3116.time = i3117[4]
  return i3116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3121 = data
  i3120.alpha = i3121[0]
  i3120.time = i3121[1]
  return i3120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3122 = root || new pc.ParticleSystemColorOverLifetime()
  var i3123 = data
  i3122.enabled = !!i3123[0]
  i3122.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3123[1], i3122.color)
  return i3122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3124 = root || new pc.ParticleSystemEmitter()
  var i3125 = data
  i3124.enabled = !!i3125[0]
  i3124.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[1], i3124.rateOverTime)
  i3124.rateOverTimeMultiplier = i3125[2]
  i3124.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[3], i3124.rateOverDistance)
  i3124.rateOverDistanceMultiplier = i3125[4]
  var i3127 = i3125[5]
  var i3126 = []
  for(var i = 0; i < i3127.length; i += 1) {
    i3126.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3127[i + 0]) );
  }
  i3124.bursts = i3126
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3130 = root || new pc.ParticleSystemBurst()
  var i3131 = data
  i3130.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3131[0], i3130.count)
  i3130.cycleCount = i3131[1]
  i3130.minCount = i3131[2]
  i3130.maxCount = i3131[3]
  i3130.repeatInterval = i3131[4]
  i3130.time = i3131[5]
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3132 = root || new pc.ParticleSystemRotationBySpeed()
  var i3133 = data
  i3132.enabled = !!i3133[0]
  i3132.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[1], i3132.x)
  i3132.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[2], i3132.y)
  i3132.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[3], i3132.z)
  i3132.xMultiplier = i3133[4]
  i3132.yMultiplier = i3133[5]
  i3132.zMultiplier = i3133[6]
  i3132.separateAxes = !!i3133[7]
  i3132.range = new pc.Vec2( i3133[8], i3133[9] )
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3134 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3135 = data
  i3134.enabled = !!i3135[0]
  i3134.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[1], i3134.x)
  i3134.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[2], i3134.y)
  i3134.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[3], i3134.z)
  i3134.xMultiplier = i3135[4]
  i3134.yMultiplier = i3135[5]
  i3134.zMultiplier = i3135[6]
  i3134.separateAxes = !!i3135[7]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3136 = root || new pc.ParticleSystemShape()
  var i3137 = data
  i3136.enabled = !!i3137[0]
  i3136.shapeType = i3137[1]
  i3136.randomDirectionAmount = i3137[2]
  i3136.sphericalDirectionAmount = i3137[3]
  i3136.randomPositionAmount = i3137[4]
  i3136.alignToDirection = !!i3137[5]
  i3136.radius = i3137[6]
  i3136.radiusMode = i3137[7]
  i3136.radiusSpread = i3137[8]
  i3136.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[9], i3136.radiusSpeed)
  i3136.radiusSpeedMultiplier = i3137[10]
  i3136.radiusThickness = i3137[11]
  i3136.angle = i3137[12]
  i3136.length = i3137[13]
  i3136.boxThickness = new pc.Vec3( i3137[14], i3137[15], i3137[16] )
  i3136.meshShapeType = i3137[17]
  request.r(i3137[18], i3137[19], 0, i3136, 'mesh')
  request.r(i3137[20], i3137[21], 0, i3136, 'meshRenderer')
  request.r(i3137[22], i3137[23], 0, i3136, 'skinnedMeshRenderer')
  i3136.useMeshMaterialIndex = !!i3137[24]
  i3136.meshMaterialIndex = i3137[25]
  i3136.useMeshColors = !!i3137[26]
  i3136.normalOffset = i3137[27]
  i3136.arc = i3137[28]
  i3136.arcMode = i3137[29]
  i3136.arcSpread = i3137[30]
  i3136.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[31], i3136.arcSpeed)
  i3136.arcSpeedMultiplier = i3137[32]
  i3136.donutRadius = i3137[33]
  i3136.position = new pc.Vec3( i3137[34], i3137[35], i3137[36] )
  i3136.rotation = new pc.Vec3( i3137[37], i3137[38], i3137[39] )
  i3136.scale = new pc.Vec3( i3137[40], i3137[41], i3137[42] )
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3138 = root || new pc.ParticleSystemSizeBySpeed()
  var i3139 = data
  i3138.enabled = !!i3139[0]
  i3138.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[1], i3138.size)
  i3138.sizeMultiplier = i3139[2]
  i3138.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[3], i3138.x)
  i3138.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[4], i3138.y)
  i3138.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3139[5], i3138.z)
  i3138.xMultiplier = i3139[6]
  i3138.yMultiplier = i3139[7]
  i3138.zMultiplier = i3139[8]
  i3138.separateAxes = !!i3139[9]
  i3138.range = new pc.Vec2( i3139[10], i3139[11] )
  return i3138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3140 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3141 = data
  i3140.enabled = !!i3141[0]
  i3140.size = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3141[1], i3140.size)
  i3140.sizeMultiplier = i3141[2]
  i3140.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3141[3], i3140.x)
  i3140.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3141[4], i3140.y)
  i3140.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3141[5], i3140.z)
  i3140.xMultiplier = i3141[6]
  i3140.yMultiplier = i3141[7]
  i3140.zMultiplier = i3141[8]
  i3140.separateAxes = !!i3141[9]
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3142 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3143 = data
  i3142.enabled = !!i3143[0]
  i3142.mode = i3143[1]
  i3142.animation = i3143[2]
  i3142.numTilesX = i3143[3]
  i3142.numTilesY = i3143[4]
  i3142.useRandomRow = !!i3143[5]
  i3142.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[6], i3142.frameOverTime)
  i3142.frameOverTimeMultiplier = i3143[7]
  i3142.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[8], i3142.startFrame)
  i3142.startFrameMultiplier = i3143[9]
  i3142.cycleCount = i3143[10]
  i3142.rowIndex = i3143[11]
  i3142.flipU = i3143[12]
  i3142.flipV = i3143[13]
  i3142.spriteCount = i3143[14]
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3144 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3145 = data
  i3144.enabled = !!i3145[0]
  i3144.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[1], i3144.x)
  i3144.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[2], i3144.y)
  i3144.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[3], i3144.z)
  i3144.xMultiplier = i3145[4]
  i3144.yMultiplier = i3145[5]
  i3144.zMultiplier = i3145[6]
  i3144.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[7], i3144.speedModifier)
  i3144.speedModifierMultiplier = i3145[8]
  i3144.space = i3145[9]
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3146 = root || new pc.ParticleSystemNoise()
  var i3147 = data
  i3146.enabled = !!i3147[0]
  i3146.separateAxes = !!i3147[1]
  i3146.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[2], i3146.strengthX)
  i3146.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[3], i3146.strengthY)
  i3146.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[4], i3146.strengthZ)
  i3146.strengthXMultiplier = i3147[5]
  i3146.strengthYMultiplier = i3147[6]
  i3146.strengthZMultiplier = i3147[7]
  i3146.frequency = i3147[8]
  i3146.damping = !!i3147[9]
  i3146.octaveCount = i3147[10]
  i3146.octaveMultiplier = i3147[11]
  i3146.octaveScale = i3147[12]
  i3146.quality = i3147[13]
  i3146.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[14], i3146.scrollSpeed)
  i3146.scrollSpeedMultiplier = i3147[15]
  i3146.remapEnabled = !!i3147[16]
  i3146.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[17], i3146.remapX)
  i3146.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[18], i3146.remapY)
  i3146.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[19], i3146.remapZ)
  i3146.remapXMultiplier = i3147[20]
  i3146.remapYMultiplier = i3147[21]
  i3146.remapZMultiplier = i3147[22]
  i3146.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[23], i3146.positionAmount)
  i3146.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[24], i3146.rotationAmount)
  i3146.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[25], i3146.sizeAmount)
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3148 = root || new pc.ParticleSystemInheritVelocity()
  var i3149 = data
  i3148.enabled = !!i3149[0]
  i3148.mode = i3149[1]
  i3148.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3149[2], i3148.curve)
  i3148.curveMultiplier = i3149[3]
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3150 = root || new pc.ParticleSystemForceOverLifetime()
  var i3151 = data
  i3150.enabled = !!i3151[0]
  i3150.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3151[1], i3150.x)
  i3150.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3151[2], i3150.y)
  i3150.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3151[3], i3150.z)
  i3150.xMultiplier = i3151[4]
  i3150.yMultiplier = i3151[5]
  i3150.zMultiplier = i3151[6]
  i3150.space = i3151[7]
  i3150.randomized = !!i3151[8]
  return i3150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3152 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3153 = data
  i3152.enabled = !!i3153[0]
  i3152.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3153[1], i3152.limit)
  i3152.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3153[2], i3152.limitX)
  i3152.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3153[3], i3152.limitY)
  i3152.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3153[4], i3152.limitZ)
  i3152.limitMultiplier = i3153[5]
  i3152.limitXMultiplier = i3153[6]
  i3152.limitYMultiplier = i3153[7]
  i3152.limitZMultiplier = i3153[8]
  i3152.dampen = i3153[9]
  i3152.separateAxes = !!i3153[10]
  i3152.space = i3153[11]
  i3152.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3153[12], i3152.drag)
  i3152.dragMultiplier = i3153[13]
  i3152.multiplyDragByParticleSize = !!i3153[14]
  i3152.multiplyDragByParticleVelocity = !!i3153[15]
  return i3152
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i3154 = root || request.c( 'LootableItem' )
  var i3155 = data
  i3154.OnLootableItemCollected = request.d('LootableItemEvent', i3155[0], i3154.OnLootableItemCollected)
  request.r(i3155[1], i3155[2], 0, i3154, 'item')
  i3154.kind = i3155[3]
  return i3154
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i3156 = root || request.c( 'LootableItemEvent' )
  var i3157 = data
  i3156.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3157[0], i3156.m_PersistentCalls)
  return i3156
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3158 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3159 = data
  var i3161 = i3159[0]
  var i3160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.add(request.d('UnityEngine.Events.PersistentCall', i3161[i + 0]));
  }
  i3158.m_Calls = i3160
  return i3158
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3164 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3165 = data
  request.r(i3165[0], i3165[1], 0, i3164, 'm_Target')
  i3164.m_MethodName = i3165[2]
  i3164.m_Mode = i3165[3]
  i3164.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3165[4], i3164.m_Arguments)
  i3164.m_CallState = i3165[5]
  return i3164
}

Deserializers["LightPole"] = function (request, data, root) {
  var i3166 = root || request.c( 'LightPole' )
  var i3167 = data
  return i3166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3169 = data
  i3168.pivot = new pc.Vec2( i3169[0], i3169[1] )
  i3168.anchorMin = new pc.Vec2( i3169[2], i3169[3] )
  i3168.anchorMax = new pc.Vec2( i3169[4], i3169[5] )
  i3168.sizeDelta = new pc.Vec2( i3169[6], i3169[7] )
  i3168.anchoredPosition3D = new pc.Vec3( i3169[8], i3169[9], i3169[10] )
  i3168.rotation = new pc.Quat(i3169[11], i3169[12], i3169[13], i3169[14])
  i3168.scale = new pc.Vec3( i3169[15], i3169[16], i3169[17] )
  return i3168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3171 = data
  i3170.cullTransparentMesh = !!i3171[0]
  return i3170
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3172 = root || request.c( 'UnityEngine.UI.Image' )
  var i3173 = data
  request.r(i3173[0], i3173[1], 0, i3172, 'm_Sprite')
  i3172.m_Type = i3173[2]
  i3172.m_PreserveAspect = !!i3173[3]
  i3172.m_FillCenter = !!i3173[4]
  i3172.m_FillMethod = i3173[5]
  i3172.m_FillAmount = i3173[6]
  i3172.m_FillClockwise = !!i3173[7]
  i3172.m_FillOrigin = i3173[8]
  i3172.m_UseSpriteMesh = !!i3173[9]
  i3172.m_PixelsPerUnitMultiplier = i3173[10]
  request.r(i3173[11], i3173[12], 0, i3172, 'm_Material')
  i3172.m_Maskable = !!i3173[13]
  i3172.m_Color = new pc.Color(i3173[14], i3173[15], i3173[16], i3173[17])
  i3172.m_RaycastTarget = !!i3173[18]
  return i3172
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i3174 = root || request.c( 'UIActiveBoost' )
  var i3175 = data
  i3174.TimeLeft = i3175[0]
  request.r(i3175[1], i3175[2], 0, i3174, 'imgIcon')
  request.r(i3175[3], i3175[4], 0, i3174, 'txtTimer')
  var i3177 = i3175[5]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 1) {
    i3176.push( request.d('UIActiveBoost+SpriteByKind', i3177[i + 0]) );
  }
  i3174.sprites = i3176
  i3174.Kind = i3175[6]
  return i3174
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i3180 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i3181 = data
  i3180.Kind = i3181[0]
  request.r(i3181[1], i3181[2], 0, i3180, 'Sprite')
  return i3180
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i3182 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i3183 = data
  i3182.m_IgnoreLayout = !!i3183[0]
  i3182.m_MinWidth = i3183[1]
  i3182.m_MinHeight = i3183[2]
  i3182.m_PreferredWidth = i3183[3]
  i3182.m_PreferredHeight = i3183[4]
  i3182.m_FlexibleWidth = i3183[5]
  i3182.m_FlexibleHeight = i3183[6]
  i3182.m_LayoutPriority = i3183[7]
  return i3182
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3184 = root || request.c( 'UnityEngine.UI.Text' )
  var i3185 = data
  i3184.m_FontData = request.d('UnityEngine.UI.FontData', i3185[0], i3184.m_FontData)
  i3184.m_Text = i3185[1]
  request.r(i3185[2], i3185[3], 0, i3184, 'm_Material')
  i3184.m_Maskable = !!i3185[4]
  i3184.m_Color = new pc.Color(i3185[5], i3185[6], i3185[7], i3185[8])
  i3184.m_RaycastTarget = !!i3185[9]
  return i3184
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3186 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3187 = data
  request.r(i3187[0], i3187[1], 0, i3186, 'm_Font')
  i3186.m_FontSize = i3187[2]
  i3186.m_FontStyle = i3187[3]
  i3186.m_BestFit = !!i3187[4]
  i3186.m_MinSize = i3187[5]
  i3186.m_MaxSize = i3187[6]
  i3186.m_Alignment = i3187[7]
  i3186.m_AlignByGeometry = !!i3187[8]
  i3186.m_RichText = !!i3187[9]
  i3186.m_HorizontalOverflow = i3187[10]
  i3186.m_VerticalOverflow = i3187[11]
  i3186.m_LineSpacing = i3187[12]
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3189 = data
  i3188.mass = i3189[0]
  i3188.drag = i3189[1]
  i3188.angularDrag = i3189[2]
  i3188.useGravity = !!i3189[3]
  i3188.isKinematic = !!i3189[4]
  i3188.constraints = i3189[5]
  i3188.maxAngularVelocity = i3189[6]
  i3188.collisionDetectionMode = i3189[7]
  i3188.interpolation = i3189[8]
  return i3188
}

Deserializers["CarController"] = function (request, data, root) {
  var i3190 = root || request.c( 'CarController' )
  var i3191 = data
  var i3193 = i3191[0]
  var i3192 = []
  for(var i = 0; i < i3193.length; i += 2) {
  request.r(i3193[i + 0], i3193[i + 1], 2, i3192, '')
  }
  i3190.m_WheelColliders = i3192
  i3190.TorqueMultiplier = i3191[1]
  i3190.m_CarDriveType = i3191[2]
  var i3195 = i3191[3]
  var i3194 = []
  for(var i = 0; i < i3195.length; i += 2) {
  request.r(i3195[i + 0], i3195[i + 1], 2, i3194, '')
  }
  i3190.m_WheelMeshes = i3194
  var i3197 = i3191[4]
  var i3196 = []
  for(var i = 0; i < i3197.length; i += 2) {
  request.r(i3197[i + 0], i3197[i + 1], 2, i3196, '')
  }
  i3190.m_WheelEffects = i3196
  i3190.m_CentreOfMassOffset = new pc.Vec3( i3191[5], i3191[6], i3191[7] )
  i3190.m_MaximumSteerAngle = i3191[8]
  i3190.m_SteerHelper = i3191[9]
  i3190.m_TractionControl = i3191[10]
  i3190.m_FullTorqueOverAllWheels = i3191[11]
  i3190.m_ReverseTorque = i3191[12]
  i3190.m_MaxHandbrakeTorque = i3191[13]
  i3190.m_Downforce = i3191[14]
  i3190.m_SpeedType = i3191[15]
  i3190.m_Topspeed = i3191[16]
  i3190.m_RevRangeBoundary = i3191[17]
  i3190.m_SlipLimit = i3191[18]
  i3190.m_BrakeTorque = i3191[19]
  i3190.m_GearNum = i3191[20]
  request.r(i3191[21], i3191[22], 0, i3190, 'm_Rigidbody')
  return i3190
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i3204 = root || request.c( 'CarUserControl' )
  var i3205 = data
  i3204.CanMove = !!i3205[0]
  request.r(i3205[1], i3205[2], 0, i3204, 'pathCreator')
  request.r(i3205[3], i3205[4], 0, i3204, 'playerCarrot')
  request.r(i3205[5], i3205[6], 0, i3204, 'farPointInDirectionOfView')
  request.r(i3205[7], i3205[8], 0, i3204, 'ghostWriter')
  request.r(i3205[9], i3205[10], 0, i3204, 'carBody')
  request.r(i3205[11], i3205[12], 0, i3204, 'collisionParticlesLeft')
  request.r(i3205[13], i3205[14], 0, i3204, 'collisionParticlesRight')
  return i3204
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i3206 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i3207 = data
  i3206.engineSoundStyle = i3207[0]
  request.r(i3207[1], i3207[2], 0, i3206, 'lowAccelClip')
  request.r(i3207[3], i3207[4], 0, i3206, 'lowDecelClip')
  request.r(i3207[5], i3207[6], 0, i3206, 'highAccelClip')
  request.r(i3207[7], i3207[8], 0, i3206, 'highDecelClip')
  i3206.pitchMultiplier = i3207[9]
  i3206.lowPitchMin = i3207[10]
  i3206.lowPitchMax = i3207[11]
  i3206.highPitchMultiplier = i3207[12]
  i3206.maxRolloffDistance = i3207[13]
  i3206.dopplerLevel = i3207[14]
  return i3206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3209 = data
  i3208.center = new pc.Vec3( i3209[0], i3209[1], i3209[2] )
  i3208.size = new pc.Vec3( i3209[3], i3209[4], i3209[5] )
  i3208.enabled = !!i3209[6]
  i3208.isTrigger = !!i3209[7]
  request.r(i3209[8], i3209[9], 0, i3208, 'material')
  return i3208
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i3210 = root || request.c( 'RaceCar' )
  var i3211 = data
  i3210.Owner = i3211[0]
  i3210.Score = i3211[1]
  request.r(i3211[2], i3211[3], 0, i3210, 'boosts')
  request.r(i3211[4], i3211[5], 0, i3210, 'products')
  request.r(i3211[6], i3211[7], 0, i3210, 'boostsEffectPosition')
  request.r(i3211[8], i3211[9], 0, i3210, 'effectSheildPrefab')
  request.r(i3211[10], i3211[11], 0, i3210, 'effectDoublePrefab')
  return i3210
}

Deserializers["HealthController"] = function (request, data, root) {
  var i3212 = root || request.c( 'HealthController' )
  var i3213 = data
  i3212.Health = i3213[0]
  i3212.MaxHealth = i3213[1]
  i3212.Shield = i3213[2]
  i3212.MaxShield = i3213[3]
  request.r(i3213[4], i3213[5], 0, i3212, 'MainScreen')
  request.r(i3213[6], i3213[7], 0, i3212, 'LossScreen')
  request.r(i3213[8], i3213[9], 0, i3212, 'boosts')
  return i3212
}

Deserializers["Gun"] = function (request, data, root) {
  var i3214 = root || request.c( 'Gun' )
  var i3215 = data
  request.r(i3215[0], i3215[1], 0, i3214, 'rocketPrefab')
  request.r(i3215[2], i3215[3], 0, i3214, 'carUserControl')
  request.r(i3215[4], i3215[5], 0, i3214, 'products')
  return i3214
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i3216 = root || request.c( 'JustWheelMeshes' )
  var i3217 = data
  var i3219 = i3217[0]
  var i3218 = []
  for(var i = 0; i < i3219.length; i += 2) {
  request.r(i3219[i + 0], i3219[i + 1], 2, i3218, '')
  }
  i3216.m_WheelMeshes = i3218
  return i3216
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i3220 = root || request.c( 'BlobShadowMovement' )
  var i3221 = data
  request.r(i3221[0], i3221[1], 0, i3220, 'Target')
  i3220.Offset = new pc.Vec3( i3221[2], i3221[3], i3221[4] )
  return i3220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3223 = data
  request.r(i3223[0], i3223[1], 0, i3222, 'clip')
  i3222.playOnAwake = !!i3223[2]
  i3222.loop = !!i3223[3]
  i3222.enabled = !!i3223[4]
  return i3222
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i3224 = root || request.c( 'WheelEffects' )
  var i3225 = data
  request.r(i3225[0], i3225[1], 0, i3224, 'SkidTrailPrefab')
  request.r(i3225[2], i3225[3], 0, i3224, 'skidParticles')
  return i3224
}

Deserializers["Rocket"] = function (request, data, root) {
  var i3226 = root || request.c( 'Rocket' )
  var i3227 = data
  request.r(i3227[0], i3227[1], 0, i3226, 'jetStream')
  request.r(i3227[2], i3227[3], 0, i3226, 'explosionPrefab')
  return i3226
}

Deserializers["Explosion"] = function (request, data, root) {
  var i3228 = root || request.c( 'Explosion' )
  var i3229 = data
  request.r(i3229[0], i3229[1], 0, i3228, 'explosionParticleSystem')
  return i3228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3231 = data
  request.r(i3231[0], i3231[1], 0, i3230, 'animatorController')
  i3230.updateMode = i3231[2]
  var i3233 = i3231[3]
  var i3232 = []
  for(var i = 0; i < i3233.length; i += 2) {
  request.r(i3233[i + 0], i3233[i + 1], 2, i3232, '')
  }
  i3230.humanBones = i3232
  i3230.enabled = !!i3231[4]
  return i3230
}

Deserializers["DriverDescription"] = function (request, data, root) {
  var i3236 = root || request.c( 'DriverDescription' )
  var i3237 = data
  var i3239 = i3237[0]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 2) {
  request.r(i3239[i + 0], i3239[i + 1], 2, i3238, '')
  }
  i3236.driverPrefab = i3238
  return i3236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3241 = data
  i3240.enabled = !!i3241[0]
  request.r(i3241[1], i3241[2], 0, i3240, 'sharedMaterial')
  var i3243 = i3241[3]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 2) {
  request.r(i3243[i + 0], i3243[i + 1], 2, i3242, '')
  }
  i3240.sharedMaterials = i3242
  i3240.receiveShadows = !!i3241[4]
  i3240.shadowCastingMode = i3241[5]
  i3240.sortingLayerID = i3241[6]
  i3240.sortingOrder = i3241[7]
  i3240.lightmapIndex = i3241[8]
  i3240.lightmapSceneIndex = i3241[9]
  i3240.lightmapScaleOffset = new pc.Vec4( i3241[10], i3241[11], i3241[12], i3241[13] )
  i3240.lightProbeUsage = i3241[14]
  i3240.reflectionProbeUsage = i3241[15]
  request.r(i3241[16], i3241[17], 0, i3240, 'sharedMesh')
  var i3245 = i3241[18]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 2) {
  request.r(i3245[i + 0], i3245[i + 1], 2, i3244, '')
  }
  i3240.bones = i3244
  i3240.updateWhenOffscreen = !!i3241[19]
  i3240.localBounds = i3241[20]
  request.r(i3241[21], i3241[22], 0, i3240, 'rootBone')
  var i3247 = i3241[23]
  var i3246 = []
  for(var i = 0; i < i3247.length; i += 1) {
    i3246.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3247[i + 0]) );
  }
  i3240.blendShapesWeights = i3246
  return i3240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3251 = data
  i3250.weight = i3251[0]
  return i3250
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i3252 = root || request.c( 'TrackHandles' )
  var i3253 = data
  request.r(i3253[0], i3253[1], 0, i3252, 'MainPath')
  i3252.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i3253[2], i3252.OnFinishReached)
  request.r(i3253[3], i3253[4], 0, i3252, 'Root')
  return i3252
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3254 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3255 = data
  i3254.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3255[0], i3254.m_PersistentCalls)
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i3256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i3257 = data
  i3256.enabled = !!i3257[0]
  i3256.isTrigger = !!i3257[1]
  request.r(i3257[2], i3257[3], 0, i3256, 'material')
  request.r(i3257[4], i3257[5], 0, i3256, 'sharedMesh')
  i3256.convex = !!i3257[6]
  return i3256
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i3258 = root || request.c( 'FinishTrigger' )
  var i3259 = data
  request.r(i3259[0], i3259[1], 0, i3258, 'trackHandles')
  return i3258
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i3260 = root || request.c( 'PathCreation.PathCreator' )
  var i3261 = data
  i3260.editorData = request.d('PathCreation.PathCreatorData', i3261[0], i3260.editorData)
  i3260.initialized = !!i3261[1]
  return i3260
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i3262 = root || request.c( 'PathCreation.PathCreatorData' )
  var i3263 = data
  i3262.vertexPathMaxAngleError = i3263[0]
  i3262.vertexPathMinVertexSpacing = i3263[1]
  i3262.showTransformTool = !!i3263[2]
  i3262.showPathBounds = !!i3263[3]
  i3262.showPerSegmentBounds = !!i3263[4]
  i3262.displayAnchorPoints = !!i3263[5]
  i3262.displayControlPoints = !!i3263[6]
  i3262.bezierHandleScale = i3263[7]
  i3262.globalDisplaySettingsFoldout = !!i3263[8]
  i3262.keepConstantHandleSize = !!i3263[9]
  i3262.showNormalsInVertexMode = !!i3263[10]
  i3262.showBezierPathInVertexMode = !!i3263[11]
  i3262.showDisplayOptions = !!i3263[12]
  i3262.showPathOptions = !!i3263[13]
  i3262.showVertexPathDisplayOptions = !!i3263[14]
  i3262.showVertexPathOptions = !!i3263[15]
  i3262.showNormals = !!i3263[16]
  i3262.showNormalsHelpInfo = !!i3263[17]
  i3262.tabIndex = i3263[18]
  i3262._bezierPath = request.d('PathCreation.BezierPath', i3263[19], i3262._bezierPath)
  i3262.vertexPathUpToDate = !!i3263[20]
  return i3262
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i3264 = root || request.c( 'PathCreation.BezierPath' )
  var i3265 = data
  var i3267 = i3265[0]
  var i3266 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i3267.length; i += 3) {
    i3266.add(new pc.Vec3( i3267[i + 0], i3267[i + 1], i3267[i + 2] ));
  }
  i3264.points = i3266
  i3264.isClosed = !!i3265[1]
  i3264.space = i3265[2]
  i3264.controlMode = i3265[3]
  i3264.autoControlLength = i3265[4]
  i3264.boundsUpToDate = !!i3265[5]
  var i3269 = i3265[6]
  var i3268 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.add(i3269[i + 0]);
  }
  i3264.perAnchorNormalsAngle = i3268
  i3264.globalNormalsAngle = i3265[7]
  i3264.flipNormals = !!i3265[8]
  return i3264
}

Deserializers["GameManager"] = function (request, data, root) {
  var i3274 = root || request.c( 'GameManager' )
  var i3275 = data
  request.r(i3275[0], i3275[1], 0, i3274, 'MainCamera')
  i3274.LandscapeFov = i3275[2]
  i3274.PortraitFov = i3275[3]
  i3274.WheatCullDistance = i3275[4]
  request.r(i3275[5], i3275[6], 0, i3274, 'CountdownWidget')
  request.r(i3275[7], i3275[8], 0, i3274, 'TutorialWindow')
  request.r(i3275[9], i3275[10], 0, i3274, 'MainBackroundImage')
  request.r(i3275[11], i3275[12], 0, i3274, 'WinScreen')
  request.r(i3275[13], i3275[14], 0, i3274, 'LoseScreen')
  request.r(i3275[15], i3275[16], 0, i3274, 'MainScreen')
  request.r(i3275[17], i3275[18], 0, i3274, 'btnLeft')
  request.r(i3275[19], i3275[20], 0, i3274, 'btnRight')
  request.r(i3275[21], i3275[22], 0, i3274, 'healthBar')
  var i3277 = i3275[23]
  var i3276 = []
  for(var i = 0; i < i3277.length; i += 2) {
  request.r(i3277[i + 0], i3277[i + 1], 2, i3276, '')
  }
  i3274.Opponents = i3276
  request.r(i3275[24], i3275[25], 0, i3274, 'PlayerCar')
  request.r(i3275[26], i3275[27], 0, i3274, 'CarUserControl')
  i3274.Position = i3275[28]
  request.r(i3275[29], i3275[30], 0, i3274, 'LastCheckpoint')
  request.r(i3275[31], i3275[32], 0, i3274, 'healthController')
  var i3279 = i3275[33]
  var i3278 = []
  for(var i = 0; i < i3279.length; i += 2) {
  request.r(i3279[i + 0], i3279[i + 1], 2, i3278, '')
  }
  i3274.tracktors = i3278
  var i3281 = i3275[34]
  var i3280 = []
  for(var i = 0; i < i3281.length; i += 2) {
  request.r(i3281[i + 0], i3281[i + 1], 2, i3280, '')
  }
  i3274.drivers = i3280
  var i3283 = i3275[35]
  var i3282 = []
  for(var i = 0; i < i3283.length; i += 2) {
  request.r(i3283[i + 0], i3283[i + 1], 2, i3282, '')
  }
  i3274.trackPrefabs = i3282
  request.r(i3275[36], i3275[37], 0, i3274, 'trackParent')
  i3274._WheatCullDistance = i3275[38]
  request.r(i3275[39], i3275[40], 0, i3274, 'trackContentGenerator')
  request.r(i3275[41], i3275[42], 0, i3274, 'wheatGenerator')
  request.r(i3275[43], i3275[44], 0, i3274, 'ghostReader')
  return i3274
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i3288 = root || request.c( 'LunaUIFields' )
  var i3289 = data
  request.r(i3289[0], i3289[1], 0, i3288, 'ObjectiveHintText')
  i3288.ObjectiveHintString = i3289[2]
  request.r(i3289[3], i3289[4], 0, i3288, 'LevelFailedButtonText')
  i3288.LevelFailedButtonString = i3289[5]
  request.r(i3289[6], i3289[7], 0, i3288, 'LevelCompleteButtonText')
  i3288.LevelCompleteButtonString = i3289[8]
  return i3288
}

Deserializers["Localization"] = function (request, data, root) {
  var i3290 = root || request.c( 'Localization' )
  var i3291 = data
  request.r(i3291[0], i3291[1], 0, i3290, 'englishAsset')
  request.r(i3291[2], i3291[3], 0, i3290, 'russianAsset')
  return i3290
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i3292 = root || request.c( 'WheatGenerator' )
  var i3293 = data
  request.r(i3293[0], i3293[1], 0, i3292, 'wheatPiece')
  request.r(i3293[2], i3293[3], 0, i3292, 'trackContentGenerator')
  request.r(i3293[4], i3293[5], 0, i3292, 'carUserControl')
  return i3292
}

Deserializers["Products"] = function (request, data, root) {
  var i3294 = root || request.c( 'Products' )
  var i3295 = data
  i3294.OnProductsNumberChanged = request.d('ProductsEvent', i3295[0], i3294.OnProductsNumberChanged)
  return i3294
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i3296 = root || request.c( 'ProductsEvent' )
  var i3297 = data
  i3296.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3297[0], i3296.m_PersistentCalls)
  return i3296
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i3298 = root || request.c( 'TrackContentGenerator' )
  var i3299 = data
  request.r(i3299[0], i3299[1], 0, i3298, 'healthController')
  var i3301 = i3299[2]
  var i3300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3301.length; i += 2) {
  request.r(i3301[i + 0], i3301[i + 1], 1, i3300, '')
  }
  i3298.AlreadyGenerated = i3300
  request.r(i3299[3], i3299[4], 0, i3298, 'parentForPlacing')
  var i3303 = i3299[5]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 2) {
  request.r(i3303[i + 0], i3303[i + 1], 2, i3302, '')
  }
  i3298.obstaclesPrefabs = i3302
  var i3305 = i3299[6]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 2) {
  request.r(i3305[i + 0], i3305[i + 1], 2, i3304, '')
  }
  i3298.hardObstaclesPrefabs = i3304
  var i3307 = i3299[7]
  var i3306 = []
  for(var i = 0; i < i3307.length; i += 2) {
  request.r(i3307[i + 0], i3307[i + 1], 2, i3306, '')
  }
  i3298.bonusesPrefabs = i3306
  request.r(i3299[8], i3299[9], 0, i3298, 'configFile')
  request.r(i3299[10], i3299[11], 0, i3298, 'products')
  request.r(i3299[12], i3299[13], 0, i3298, 'boosts')
  return i3298
}

Deserializers["Boosts"] = function (request, data, root) {
  var i3310 = root || request.c( 'Boosts' )
  var i3311 = data
  var i3313 = i3311[0]
  var i3312 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i3313.length; i += 1) {
    i3312.add(request.d('Boosts+DataItem', i3313[i + 0]));
  }
  i3310.Data = i3312
  return i3310
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i3316 = root || request.c( 'Boosts+DataItem' )
  var i3317 = data
  i3316.Kind = i3317[0]
  i3316.TimeLeft = i3317[1]
  return i3316
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i3318 = root || request.c( 'GhostWriter' )
  var i3319 = data
  i3318.timer = i3319[0]
  var i3321 = i3319[1]
  var i3320 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.add(request.d('GhostWriter+Entry', i3321[i + 0]));
  }
  i3318.data = i3320
  request.r(i3319[2], i3319[3], 0, i3318, 'carUserControl')
  return i3318
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i3324 = root || request.c( 'GhostWriter+Entry' )
  var i3325 = data
  i3324.kind = i3325[0]
  i3324.time = i3325[1]
  i3324.distance = i3325[2]
  i3324.sideOffset = i3325[3]
  i3324.speed = i3325[4]
  return i3324
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i3326 = root || request.c( 'GhostReader' )
  var i3327 = data
  request.r(i3327[0], i3327[1], 0, i3326, 'ghost')
  request.r(i3327[2], i3327[3], 0, i3326, 'pathCreator')
  i3326.timer = i3327[4]
  var i3329 = i3327[5]
  var i3328 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.add(request.d('GhostReader+Entry', i3329[i + 0]));
  }
  i3326.data = i3328
  return i3326
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i3332 = root || request.c( 'GhostReader+Entry' )
  var i3333 = data
  i3332.kind = i3333[0]
  i3332.time = i3333[1]
  i3332.distance = i3333[2]
  i3332.sideOffset = i3333[3]
  i3332.speed = i3333[4]
  return i3332
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i3334 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i3335 = data
  i3334.m_MoveSpeed = i3335[0]
  i3334.m_TurnSpeed = i3335[1]
  i3334.m_RollSpeed = i3335[2]
  i3334.m_FollowVelocity = !!i3335[3]
  i3334.m_FollowTilt = !!i3335[4]
  i3334.m_SpinTurnLimit = i3335[5]
  i3334.m_TargetVelocityLowerLimit = i3335[6]
  i3334.m_SmoothTurnTime = i3335[7]
  request.r(i3335[8], i3335[9], 0, i3334, 'm_Target')
  i3334.m_AutoTargetPlayer = !!i3335[10]
  i3334.m_UpdateType = i3335[11]
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3337 = data
  i3336.enabled = !!i3337[0]
  i3336.aspect = i3337[1]
  i3336.orthographic = !!i3337[2]
  i3336.orthographicSize = i3337[3]
  i3336.backgroundColor = new pc.Color(i3337[4], i3337[5], i3337[6], i3337[7])
  i3336.nearClipPlane = i3337[8]
  i3336.farClipPlane = i3337[9]
  i3336.fieldOfView = i3337[10]
  i3336.depth = i3337[11]
  i3336.clearFlags = i3337[12]
  i3336.cullingMask = i3337[13]
  i3336.rect = i3337[14]
  request.r(i3337[15], i3337[16], 0, i3336, 'targetTexture')
  return i3336
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i3338 = root || request.c( 'CameraFollower' )
  var i3339 = data
  request.r(i3339[0], i3339[1], 0, i3338, 'Target')
  i3338.PositionOffset = new pc.Vec3( i3339[2], i3339[3], i3339[4] )
  i3338.RotationOffset = new pc.Vec3( i3339[5], i3339[6], i3339[7] )
  i3338.CameraSpeed = i3339[8]
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3341 = data
  i3340.enabled = !!i3341[0]
  i3340.type = i3341[1]
  i3340.color = new pc.Color(i3341[2], i3341[3], i3341[4], i3341[5])
  i3340.cullingMask = i3341[6]
  i3340.intensity = i3341[7]
  i3340.range = i3341[8]
  i3340.spotAngle = i3341[9]
  i3340.shadows = i3341[10]
  i3340.shadowNormalBias = i3341[11]
  i3340.shadowBias = i3341[12]
  i3340.shadowStrength = i3341[13]
  i3340.lightmapBakeType = i3341[14]
  i3340.renderMode = i3341[15]
  request.r(i3341[16], i3341[17], 0, i3340, 'cookie')
  i3340.cookieSize = i3341[18]
  return i3340
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3342 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3343 = data
  request.r(i3343[0], i3343[1], 0, i3342, 'm_FirstSelected')
  i3342.m_sendNavigationEvents = !!i3343[2]
  i3342.m_DragThreshold = i3343[3]
  return i3342
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3344 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3345 = data
  i3344.m_HorizontalAxis = i3345[0]
  i3344.m_VerticalAxis = i3345[1]
  i3344.m_SubmitButton = i3345[2]
  i3344.m_CancelButton = i3345[3]
  i3344.m_InputActionsPerSecond = i3345[4]
  i3344.m_RepeatDelay = i3345[5]
  i3344.m_ForceModuleActive = !!i3345[6]
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3347 = data
  i3346.enabled = !!i3347[0]
  i3346.planeDistance = i3347[1]
  i3346.referencePixelsPerUnit = i3347[2]
  i3346.isFallbackOverlay = !!i3347[3]
  i3346.renderMode = i3347[4]
  i3346.renderOrder = i3347[5]
  i3346.sortingLayerName = i3347[6]
  i3346.sortingOrder = i3347[7]
  i3346.scaleFactor = i3347[8]
  request.r(i3347[9], i3347[10], 0, i3346, 'worldCamera')
  i3346.overrideSorting = !!i3347[11]
  i3346.pixelPerfect = !!i3347[12]
  i3346.targetDisplay = i3347[13]
  i3346.overridePixelPerfect = !!i3347[14]
  return i3346
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3348 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3349 = data
  i3348.m_UiScaleMode = i3349[0]
  i3348.m_ReferencePixelsPerUnit = i3349[1]
  i3348.m_ScaleFactor = i3349[2]
  i3348.m_ReferenceResolution = new pc.Vec2( i3349[3], i3349[4] )
  i3348.m_ScreenMatchMode = i3349[5]
  i3348.m_MatchWidthOrHeight = i3349[6]
  i3348.m_PhysicalUnit = i3349[7]
  i3348.m_FallbackScreenDPI = i3349[8]
  i3348.m_DefaultSpriteDPI = i3349[9]
  i3348.m_DynamicPixelsPerUnit = i3349[10]
  return i3348
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3350 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3351 = data
  i3350.m_IgnoreReversedGraphics = !!i3351[0]
  i3350.m_BlockingObjects = i3351[1]
  i3350.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3351[2] )
  return i3350
}

Deserializers["Countdown"] = function (request, data, root) {
  var i3352 = root || request.c( 'Countdown' )
  var i3353 = data
  request.r(i3353[0], i3353[1], 0, i3352, 'CountdownText')
  request.r(i3353[2], i3353[3], 0, i3352, 'Go_Image')
  request.r(i3353[4], i3353[5], 0, i3352, 'Outline')
  request.r(i3353[6], i3353[7], 0, i3352, 'MainWindow')
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3355 = data
  i3354.m_Alpha = i3355[0]
  i3354.m_Interactable = !!i3355[1]
  i3354.m_BlocksRaycasts = !!i3355[2]
  i3354.m_IgnoreParentGroups = !!i3355[3]
  i3354.enabled = !!i3355[4]
  return i3354
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i3356 = root || request.c( 'UnityEngine.UI.Outline' )
  var i3357 = data
  i3356.m_EffectColor = new pc.Color(i3357[0], i3357[1], i3357[2], i3357[3])
  i3356.m_EffectDistance = new pc.Vec2( i3357[4], i3357[5] )
  i3356.m_UseGraphicAlpha = !!i3357[6]
  return i3356
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i3358 = root || request.c( 'WinScreenWidget' )
  var i3359 = data
  request.r(i3359[0], i3359[1], 0, i3358, 'RaceCar')
  request.r(i3359[2], i3359[3], 0, i3358, 'WheatText')
  request.r(i3359[4], i3359[5], 0, i3358, 'GemText')
  request.r(i3359[6], i3359[7], 0, i3358, 'GameManager')
  request.r(i3359[8], i3359[9], 0, i3358, 'products')
  return i3358
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3360 = root || request.c( 'UnityEngine.UI.Button' )
  var i3361 = data
  i3360.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3361[0], i3360.m_OnClick)
  i3360.m_Navigation = request.d('UnityEngine.UI.Navigation', i3361[1], i3360.m_Navigation)
  i3360.m_Transition = i3361[2]
  i3360.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3361[3], i3360.m_Colors)
  i3360.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3361[4], i3360.m_SpriteState)
  i3360.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3361[5], i3360.m_AnimationTriggers)
  i3360.m_Interactable = !!i3361[6]
  request.r(i3361[7], i3361[8], 0, i3360, 'm_TargetGraphic')
  return i3360
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3362 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3363 = data
  i3362.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3363[0], i3362.m_PersistentCalls)
  return i3362
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3364 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3365 = data
  i3364.m_Mode = i3365[0]
  request.r(i3365[1], i3365[2], 0, i3364, 'm_SelectOnUp')
  request.r(i3365[3], i3365[4], 0, i3364, 'm_SelectOnDown')
  request.r(i3365[5], i3365[6], 0, i3364, 'm_SelectOnLeft')
  request.r(i3365[7], i3365[8], 0, i3364, 'm_SelectOnRight')
  return i3364
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3366 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3367 = data
  i3366.m_NormalColor = new pc.Color(i3367[0], i3367[1], i3367[2], i3367[3])
  i3366.m_HighlightedColor = new pc.Color(i3367[4], i3367[5], i3367[6], i3367[7])
  i3366.m_PressedColor = new pc.Color(i3367[8], i3367[9], i3367[10], i3367[11])
  i3366.m_SelectedColor = new pc.Color(i3367[12], i3367[13], i3367[14], i3367[15])
  i3366.m_DisabledColor = new pc.Color(i3367[16], i3367[17], i3367[18], i3367[19])
  i3366.m_ColorMultiplier = i3367[20]
  i3366.m_FadeDuration = i3367[21]
  return i3366
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3368 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3369 = data
  request.r(i3369[0], i3369[1], 0, i3368, 'm_HighlightedSprite')
  request.r(i3369[2], i3369[3], 0, i3368, 'm_PressedSprite')
  request.r(i3369[4], i3369[5], 0, i3368, 'm_SelectedSprite')
  request.r(i3369[6], i3369[7], 0, i3368, 'm_DisabledSprite')
  return i3368
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3370 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3371 = data
  i3370.m_NormalTrigger = i3371[0]
  i3370.m_HighlightedTrigger = i3371[1]
  i3370.m_PressedTrigger = i3371[2]
  i3370.m_SelectedTrigger = i3371[3]
  i3370.m_DisabledTrigger = i3371[4]
  return i3370
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i3372 = root || request.c( 'EndGameButton' )
  var i3373 = data
  request.r(i3373[0], i3373[1], 0, i3372, 'GameManager')
  return i3372
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3374 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3375 = data
  request.r(i3375[0], i3375[1], 0, i3374, 'm_ObjectArgument')
  i3374.m_ObjectArgumentAssemblyTypeName = i3375[2]
  i3374.m_IntArgument = i3375[3]
  i3374.m_FloatArgument = i3375[4]
  i3374.m_StringArgument = i3375[5]
  i3374.m_BoolArgument = !!i3375[6]
  return i3374
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3376 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3377 = data
  request.r(i3377[0], i3377[1], 0, i3376, 'm_FillRect')
  request.r(i3377[2], i3377[3], 0, i3376, 'm_HandleRect')
  i3376.m_Direction = i3377[4]
  i3376.m_MinValue = i3377[5]
  i3376.m_MaxValue = i3377[6]
  i3376.m_WholeNumbers = !!i3377[7]
  i3376.m_Value = i3377[8]
  i3376.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3377[9], i3376.m_OnValueChanged)
  i3376.m_Navigation = request.d('UnityEngine.UI.Navigation', i3377[10], i3376.m_Navigation)
  i3376.m_Transition = i3377[11]
  i3376.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3377[12], i3376.m_Colors)
  i3376.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3377[13], i3376.m_SpriteState)
  i3376.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3377[14], i3376.m_AnimationTriggers)
  i3376.m_Interactable = !!i3377[15]
  request.r(i3377[16], i3377[17], 0, i3376, 'm_TargetGraphic')
  return i3376
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3378 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3379 = data
  i3378.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3379[0], i3378.m_PersistentCalls)
  return i3378
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i3380 = root || request.c( 'WheatSliderWidget' )
  var i3381 = data
  request.r(i3381[0], i3381[1], 0, i3380, 'Slider')
  request.r(i3381[2], i3381[3], 0, i3380, 'gameManager')
  request.r(i3381[4], i3381[5], 0, i3380, 'BarIconImage')
  request.r(i3381[6], i3381[7], 0, i3380, 'WheatImage')
  i3380.MaxWheat = i3381[8]
  request.r(i3381[9], i3381[10], 0, i3380, 'products')
  return i3380
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i3382 = root || request.c( 'LongTapButton' )
  var i3383 = data
  i3382.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i3383[0], i3382.OnMouseDownEvent)
  i3382.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i3383[1], i3382.OnMouseUpEvent)
  return i3382
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i3384 = root || request.c( 'HealthBar' )
  var i3385 = data
  request.r(i3385[0], i3385[1], 0, i3384, 'Slider')
  request.r(i3385[2], i3385[3], 0, i3384, 'HealthProvider')
  request.r(i3385[4], i3385[5], 0, i3384, 'BarIconImage')
  return i3384
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i3386 = root || request.c( 'ShootButtonCtrl' )
  var i3387 = data
  request.r(i3387[0], i3387[1], 0, i3386, 'txtPew')
  request.r(i3387[2], i3387[3], 0, i3386, 'txtNoAmmo')
  request.r(i3387[4], i3387[5], 0, i3386, 'products')
  request.r(i3387[6], i3387[7], 0, i3386, 'localization')
  return i3386
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i3388 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i3389 = data
  i3388.m_Spacing = i3389[0]
  i3388.m_ChildForceExpandWidth = !!i3389[1]
  i3388.m_ChildForceExpandHeight = !!i3389[2]
  i3388.m_ChildControlWidth = !!i3389[3]
  i3388.m_ChildControlHeight = !!i3389[4]
  i3388.m_ChildScaleWidth = !!i3389[5]
  i3388.m_ChildScaleHeight = !!i3389[6]
  i3388.m_Padding = UnityEngine.RectOffset.FromPaddings(i3389[7], i3389[8], i3389[9], i3389[10])
  i3388.m_ChildAlignment = i3389[11]
  return i3388
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i3390 = root || request.c( 'BoostsPanelCtrl' )
  var i3391 = data
  request.r(i3391[0], i3391[1], 0, i3390, 'boosts')
  request.r(i3391[2], i3391[3], 0, i3390, 'wgtBoostPrefab')
  return i3390
}

Deserializers["RocketsPanelCtrl"] = function (request, data, root) {
  var i3392 = root || request.c( 'RocketsPanelCtrl' )
  var i3393 = data
  request.r(i3393[0], i3393[1], 0, i3392, 'products')
  request.r(i3393[2], i3393[3], 0, i3392, 'rocketPrefab')
  return i3392
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i3394 = root || request.c( 'ShieldBar' )
  var i3395 = data
  request.r(i3395[0], i3395[1], 0, i3394, 'slider')
  request.r(i3395[2], i3395[3], 0, i3394, 'healthController')
  request.r(i3395[4], i3395[5], 0, i3394, 'barIconImage')
  request.r(i3395[6], i3395[7], 0, i3394, 'allUI')
  return i3394
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i3396 = root || request.c( 'TimeSinceStartup' )
  var i3397 = data
  request.r(i3397[0], i3397[1], 0, i3396, 'Text')
  return i3396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3399 = data
  i3398.name = i3399[0]
  i3398.atlasId = i3399[1]
  i3398.mipmapCount = i3399[2]
  i3398.hdr = !!i3399[3]
  i3398.size = i3399[4]
  i3398.anisoLevel = i3399[5]
  i3398.filterMode = i3399[6]
  i3398.wrapMode = i3399[7]
  var i3401 = i3399[8]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 4) {
    i3400.push( UnityEngine.Rect.MinMaxRect(i3401[i + 0], i3401[i + 1], i3401[i + 2], i3401[i + 3]) );
  }
  i3398.rects = i3400
  return i3398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3405 = data
  i3404.name = i3405[0]
  i3404.index = i3405[1]
  i3404.startup = !!i3405[2]
  return i3404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3407 = data
  i3406.ambientIntensity = i3407[0]
  i3406.reflectionIntensity = i3407[1]
  i3406.ambientMode = i3407[2]
  i3406.ambientLight = new pc.Color(i3407[3], i3407[4], i3407[5], i3407[6])
  i3406.ambientSkyColor = new pc.Color(i3407[7], i3407[8], i3407[9], i3407[10])
  i3406.ambientGroundColor = new pc.Color(i3407[11], i3407[12], i3407[13], i3407[14])
  i3406.ambientEquatorColor = new pc.Color(i3407[15], i3407[16], i3407[17], i3407[18])
  i3406.fogColor = new pc.Color(i3407[19], i3407[20], i3407[21], i3407[22])
  i3406.fogEndDistance = i3407[23]
  i3406.fogStartDistance = i3407[24]
  i3406.fogDensity = i3407[25]
  i3406.fog = !!i3407[26]
  request.r(i3407[27], i3407[28], 0, i3406, 'skybox')
  i3406.fogMode = i3407[29]
  var i3409 = i3407[30]
  var i3408 = []
  for(var i = 0; i < i3409.length; i += 1) {
    i3408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3409[i + 0]) );
  }
  i3406.lightmaps = i3408
  i3406.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3407[31], i3406.lightProbes)
  i3406.lightmapsMode = i3407[32]
  i3406.environmentLightingMode = i3407[33]
  i3406.ambientProbe = new pc.SphericalHarmonicsL2(i3407[34])
  request.r(i3407[35], i3407[36], 0, i3406, 'customReflection')
  request.r(i3407[37], i3407[38], 0, i3406, 'defaultReflection')
  i3406.defaultReflectionMode = i3407[39]
  i3406.defaultReflectionResolution = i3407[40]
  i3406.sunLightObjectId = i3407[41]
  i3406.pixelLightCount = i3407[42]
  i3406.defaultReflectionHDR = !!i3407[43]
  i3406.hasLightDataAsset = !!i3407[44]
  i3406.hasManualGenerate = !!i3407[45]
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3413 = data
  request.r(i3413[0], i3413[1], 0, i3412, 'lightmapColor')
  request.r(i3413[2], i3413[3], 0, i3412, 'lightmapDirection')
  return i3412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3414 = root || new UnityEngine.LightProbes()
  var i3415 = data
  return i3414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3423 = data
  i3422.name = i3423[0]
  var i3425 = i3423[1]
  var i3424 = []
  for(var i = 0; i < i3425.length; i += 1) {
    i3424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3425[i + 0]) );
  }
  i3422.passes = i3424
  var i3427 = i3423[2]
  var i3426 = []
  for(var i = 0; i < i3427.length; i += 1) {
    i3426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3427[i + 0]) );
  }
  i3422.defaultParameterValues = i3426
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3430 = root || new pc.UnityShaderPass()
  var i3431 = data
  i3430.passType = i3431[0]
  i3430.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[1], i3430.zTest)
  i3430.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[2], i3430.zWrite)
  i3430.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[3], i3430.culling)
  i3430.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3431[4], i3430.blending)
  i3430.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3431[5], i3430.alphaBlending)
  i3430.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[6], i3430.colorWriteMask)
  i3430.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[7], i3430.offsetUnits)
  i3430.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[8], i3430.offsetFactor)
  i3430.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[9], i3430.stencilRef)
  i3430.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[10], i3430.stencilReadMask)
  i3430.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3431[11], i3430.stencilWriteMask)
  i3430.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3431[12], i3430.stencilOp)
  i3430.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3431[13], i3430.stencilOpFront)
  i3430.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3431[14], i3430.stencilOpBack)
  var i3433 = i3431[15]
  var i3432 = []
  for(var i = 0; i < i3433.length; i += 1) {
    i3432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3433[i + 0]) );
  }
  i3430.tags = i3432
  var i3435 = i3431[16]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3435[i + 0]) );
  }
  i3430.variants = i3434
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3437 = data
  i3436.val = i3437[0]
  i3436.name = i3437[1]
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3439 = data
  i3438.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3439[0], i3438.src)
  i3438.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3439[1], i3438.dst)
  i3438.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3439[2], i3438.op)
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3441 = data
  i3440.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3441[0], i3440.pass)
  i3440.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3441[1], i3440.fail)
  i3440.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3441[2], i3440.zFail)
  i3440.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3441[3], i3440.comp)
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3445 = data
  i3444.name = i3445[0]
  i3444.value = i3445[1]
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3449 = data
  var i3451 = i3449[0]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 1) {
    i3450.push( i3451[i + 0] );
  }
  i3448.keywords = i3450
  i3448.vertexProgram = i3449[1]
  i3448.fragmentProgram = i3449[2]
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3457 = data
  i3456.name = i3457[0]
  i3456.type = i3457[1]
  i3456.value = new pc.Vec4( i3457[2], i3457[3], i3457[4], i3457[5] )
  i3456.textureValue = i3457[6]
  return i3456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3459 = data
  i3458.name = i3459[0]
  request.r(i3459[1], i3459[2], 0, i3458, 'texture')
  i3458.aabb = i3459[3]
  i3458.vertices = i3459[4]
  i3458.triangles = i3459[5]
  i3458.textureRect = UnityEngine.Rect.MinMaxRect(i3459[6], i3459[7], i3459[8], i3459[9])
  i3458.packedRect = UnityEngine.Rect.MinMaxRect(i3459[10], i3459[11], i3459[12], i3459[13])
  i3458.border = new pc.Vec4( i3459[14], i3459[15], i3459[16], i3459[17] )
  i3458.transparency = i3459[18]
  i3458.bounds = i3459[19]
  i3458.pixelsPerUnit = i3459[20]
  i3458.textureWidth = i3459[21]
  i3458.textureHeight = i3459[22]
  i3458.nativeSize = new pc.Vec2( i3459[23], i3459[24] )
  i3458.pivot = new pc.Vec2( i3459[25], i3459[26] )
  i3458.textureRectOffset = new pc.Vec2( i3459[27], i3459[28] )
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3461 = data
  i3460.name = i3461[0]
  i3460.wrapMode = i3461[1]
  i3460.isLooping = !!i3461[2]
  i3460.length = i3461[3]
  var i3463 = i3461[4]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3463[i + 0]) );
  }
  i3460.curves = i3462
  var i3465 = i3461[5]
  var i3464 = []
  for(var i = 0; i < i3465.length; i += 1) {
    i3464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3465[i + 0]) );
  }
  i3460.events = i3464
  i3460.halfPrecision = !!i3461[6]
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3469 = data
  i3468.path = i3469[0]
  i3468.componentType = i3469[1]
  i3468.property = i3469[2]
  i3468.keys = i3469[3]
  var i3471 = i3469[4]
  var i3470 = []
  for(var i = 0; i < i3471.length; i += 1) {
    i3470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3471[i + 0]) );
  }
  i3468.objectReferenceKeys = i3470
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3475 = data
  i3474.time = i3475[0]
  request.r(i3475[1], i3475[2], 0, i3474, 'value')
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3479 = data
  i3478.functionName = i3479[0]
  i3478.floatParameter = i3479[1]
  i3478.intParameter = i3479[2]
  i3478.stringParameter = i3479[3]
  request.r(i3479[4], i3479[5], 0, i3478, 'objectReferenceParameter')
  i3478.time = i3479[6]
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3481 = data
  i3480.name = i3481[0]
  i3480.ascent = i3481[1]
  i3480.originalLineHeight = i3481[2]
  i3480.fontSize = i3481[3]
  var i3483 = i3481[4]
  var i3482 = []
  for(var i = 0; i < i3483.length; i += 1) {
    i3482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3483[i + 0]) );
  }
  i3480.characterInfo = i3482
  request.r(i3481[5], i3481[6], 0, i3480, 'texture')
  i3480.originalFontSize = i3481[7]
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3487 = data
  i3486.index = i3487[0]
  i3486.advance = i3487[1]
  i3486.bearing = i3487[2]
  i3486.glyphWidth = i3487[3]
  i3486.glyphHeight = i3487[4]
  i3486.minX = i3487[5]
  i3486.maxX = i3487[6]
  i3486.minY = i3487[7]
  i3486.maxY = i3487[8]
  i3486.uvBottomLeftX = i3487[9]
  i3486.uvBottomLeftY = i3487[10]
  i3486.uvBottomRightX = i3487[11]
  i3486.uvBottomRightY = i3487[12]
  i3486.uvTopLeftX = i3487[13]
  i3486.uvTopLeftY = i3487[14]
  i3486.uvTopRightX = i3487[15]
  i3486.uvTopRightY = i3487[16]
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3489 = data
  i3488.name = i3489[0]
  var i3491 = i3489[1]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 1) {
    i3490.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3491[i + 0]) );
  }
  i3488.states = i3490
  var i3493 = i3489[2]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3493[i + 0]) );
  }
  i3488.layers = i3492
  var i3495 = i3489[3]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3495[i + 0]) );
  }
  i3488.parameters = i3494
  return i3488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3499 = data
  i3498.cycleOffset = i3499[0]
  i3498.cycleOffsetParameter = i3499[1]
  i3498.cycleOffsetParameterActive = !!i3499[2]
  i3498.mirror = !!i3499[3]
  i3498.mirrorParameter = i3499[4]
  i3498.mirrorParameterActive = !!i3499[5]
  i3498.motionId = i3499[6]
  i3498.nameHash = i3499[7]
  i3498.fullPathHash = i3499[8]
  i3498.speed = i3499[9]
  i3498.speedParameter = i3499[10]
  i3498.speedParameterActive = !!i3499[11]
  i3498.tag = i3499[12]
  i3498.name = i3499[13]
  i3498.writeDefaultValues = !!i3499[14]
  var i3501 = i3499[15]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3501[i + 0]) );
  }
  i3498.transitions = i3500
  var i3503 = i3499[16]
  var i3502 = []
  for(var i = 0; i < i3503.length; i += 2) {
  request.r(i3503[i + 0], i3503[i + 1], 2, i3502, '')
  }
  i3498.behaviours = i3502
  return i3498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3507 = data
  i3506.fullPath = i3507[0]
  i3506.canTransitionToSelf = !!i3507[1]
  i3506.duration = i3507[2]
  i3506.exitTime = i3507[3]
  i3506.hasExitTime = !!i3507[4]
  i3506.hasFixedDuration = !!i3507[5]
  i3506.interruptionSource = i3507[6]
  i3506.offset = i3507[7]
  i3506.orderedInterruption = !!i3507[8]
  i3506.destinationStateNameHash = i3507[9]
  i3506.destinationStateMachineId = i3507[10]
  i3506.isExit = !!i3507[11]
  i3506.mute = !!i3507[12]
  i3506.solo = !!i3507[13]
  var i3509 = i3507[14]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3509[i + 0]) );
  }
  i3506.conditions = i3508
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3515 = data
  i3514.blendingMode = i3515[0]
  i3514.defaultWeight = i3515[1]
  i3514.name = i3515[2]
  i3514.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3515[3], i3514.stateMachine)
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3517 = data
  i3516.id = i3517[0]
  i3516.defaultStateNameHash = i3517[1]
  var i3519 = i3517[2]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
    i3518.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3519[i + 0]) );
  }
  i3516.entryTransitions = i3518
  var i3521 = i3517[3]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3521[i + 0]) );
  }
  i3516.anyStateTransitions = i3520
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3525 = data
  i3524.destinationStateNameHash = i3525[0]
  i3524.destinationStateMachineId = i3525[1]
  i3524.isExit = !!i3525[2]
  i3524.mute = !!i3525[3]
  i3524.solo = !!i3525[4]
  var i3527 = i3525[5]
  var i3526 = []
  for(var i = 0; i < i3527.length; i += 1) {
    i3526.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3527[i + 0]) );
  }
  i3524.conditions = i3526
  return i3524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3531 = data
  i3530.defaultBool = !!i3531[0]
  i3530.defaultFloat = i3531[1]
  i3530.defaultInt = i3531[2]
  i3530.name = i3531[3]
  i3530.nameHash = i3531[4]
  i3530.type = i3531[5]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3533 = data
  i3532.name = i3533[0]
  i3532.bytes64 = i3533[1]
  i3532.data = i3533[2]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3535 = data
  var i3537 = i3535[0]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3537[i + 0]) );
  }
  i3534.files = i3536
  i3534.componentToPrefabIds = i3535[1]
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3541 = data
  i3540.path = i3541[0]
  request.r(i3541[1], i3541[2], 0, i3540, 'unityObject')
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3543 = data
  var i3545 = i3543[0]
  var i3544 = []
  for(var i = 0; i < i3545.length; i += 1) {
    i3544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3545[i + 0]) );
  }
  i3542.scriptsExecutionOrder = i3544
  var i3547 = i3543[1]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3547[i + 0]) );
  }
  i3542.sortingLayers = i3546
  var i3549 = i3543[2]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3549[i + 0]) );
  }
  i3542.cullingLayers = i3548
  i3542.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3543[3], i3542.timeSettings)
  i3542.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3543[4], i3542.physicsSettings)
  i3542.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3543[5], i3542.physics2DSettings)
  i3542.removeShadows = !!i3543[6]
  i3542.autoInstantiatePrefabs = !!i3543[7]
  i3542.enableAutoInstancing = !!i3543[8]
  i3542.lightmapEncodingQuality = i3543[9]
  i3542.desiredColorSpace = i3543[10]
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3553 = data
  i3552.name = i3553[0]
  i3552.value = i3553[1]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3557 = data
  i3556.id = i3557[0]
  i3556.name = i3557[1]
  i3556.value = i3557[2]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3561 = data
  i3560.id = i3561[0]
  i3560.name = i3561[1]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3563 = data
  i3562.fixedDeltaTime = i3563[0]
  i3562.maximumDeltaTime = i3563[1]
  i3562.timeScale = i3563[2]
  i3562.maximumParticleTimestep = i3563[3]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3565 = data
  i3564.gravity = new pc.Vec3( i3565[0], i3565[1], i3565[2] )
  i3564.defaultSolverIterations = i3565[3]
  i3564.autoSyncTransforms = !!i3565[4]
  i3564.autoSimulation = !!i3565[5]
  var i3567 = i3565[6]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 1) {
    i3566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3567[i + 0]) );
  }
  i3564.collisionMatrix = i3566
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3571 = data
  i3570.enabled = !!i3571[0]
  i3570.layerId = i3571[1]
  i3570.otherLayerId = i3571[2]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3573 = data
  request.r(i3573[0], i3573[1], 0, i3572, 'material')
  i3572.gravity = new pc.Vec2( i3573[2], i3573[3] )
  i3572.positionIterations = i3573[4]
  i3572.velocityIterations = i3573[5]
  i3572.velocityThreshold = i3573[6]
  i3572.maxLinearCorrection = i3573[7]
  i3572.maxAngularCorrection = i3573[8]
  i3572.maxTranslationSpeed = i3573[9]
  i3572.maxRotationSpeed = i3573[10]
  i3572.timeToSleep = i3573[11]
  i3572.linearSleepTolerance = i3573[12]
  i3572.angularSleepTolerance = i3573[13]
  i3572.defaultContactOffset = i3573[14]
  i3572.autoSimulation = !!i3573[15]
  i3572.queriesHitTriggers = !!i3573[16]
  i3572.queriesStartInColliders = !!i3573[17]
  i3572.callbacksOnDisable = !!i3573[18]
  i3572.reuseCollisionCallbacks = !!i3573[19]
  i3572.autoSyncTransforms = !!i3573[20]
  var i3575 = i3573[21]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3575[i + 0]) );
  }
  i3572.collisionMatrix = i3574
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3579 = data
  i3578.enabled = !!i3579[0]
  i3578.layerId = i3579[1]
  i3578.otherLayerId = i3579[2]
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3583 = data
  i3582.weight = i3583[0]
  i3582.vertices = i3583[1]
  i3582.normals = i3583[2]
  i3582.tangents = i3583[3]
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3587 = data
  i3586.mode = i3587[0]
  i3586.parameter = i3587[1]
  i3586.threshold = i3587[2]
  return i3586
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startDelayMultiplier":4,"startLifetime":5,"startLifetimeMultiplier":6,"startSpeed":7,"startSpeedMultiplier":8,"startSize3D":9,"startSize":10,"startSizeMultiplier":11,"startSizeX":12,"startSizeXMultiplier":13,"startSizeY":14,"startSizeYMultiplier":15,"startSizeZ":16,"startSizeZMultiplier":17,"startRotation3D":18,"startRotation":19,"startRotationMultiplier":20,"startRotationX":21,"startRotationXMultiplier":22,"startRotationY":23,"startRotationYMultiplier":24,"startRotationZ":25,"startRotationZMultiplier":26,"startColor":27,"gravityModifier":28,"gravityModifierMultiplier":29,"simulationSpace":30,"customSimulationSpace":31,"simulationSpeed":33,"useUnscaledTime":34,"scalingMode":35,"playOnAwake":36,"maxParticles":37,"emitterVelocityMode":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"m_Mode":0,"m_CurveMin":1,"m_CurveMax":2,"m_CurveMultiplier":3,"m_ConstantMin":4,"m_ConstantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"m_Mode":0,"m_GradientMin":1,"m_GradientMax":2,"m_ColorMin":3,"m_ColorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverTimeMultiplier":2,"rateOverDistance":3,"rateOverDistanceMultiplier":4,"bursts":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7,"range":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"separateAxes":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusSpeedMultiplier":10,"radiusThickness":11,"angle":12,"length":13,"boxThickness":14,"meshShapeType":17,"mesh":18,"meshRenderer":20,"skinnedMeshRenderer":22,"useMeshMaterialIndex":24,"meshMaterialIndex":25,"useMeshColors":26,"normalOffset":27,"arc":28,"arcMode":29,"arcSpread":30,"arcSpeed":31,"arcSpeedMultiplier":32,"donutRadius":33,"position":34,"rotation":37,"scale":40},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9,"range":10},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"size":1,"sizeMultiplier":2,"x":3,"y":4,"z":5,"xMultiplier":6,"yMultiplier":7,"zMultiplier":8,"separateAxes":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"frameOverTimeMultiplier":7,"startFrame":8,"startFrameMultiplier":9,"cycleCount":10,"rowIndex":11,"flipU":12,"flipV":13,"spriteCount":14},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"speedModifier":7,"speedModifierMultiplier":8,"space":9},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"strengthXMultiplier":5,"strengthYMultiplier":6,"strengthZMultiplier":7,"frequency":8,"damping":9,"octaveCount":10,"octaveMultiplier":11,"octaveScale":12,"quality":13,"scrollSpeed":14,"scrollSpeedMultiplier":15,"remapEnabled":16,"remapX":17,"remapY":18,"remapZ":19,"remapXMultiplier":20,"remapYMultiplier":21,"remapZMultiplier":22,"positionAmount":23,"rotationAmount":24,"sizeAmount":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2,"curveMultiplier":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"xMultiplier":4,"yMultiplier":5,"zMultiplier":6,"space":7,"randomized":8},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"limitMultiplier":5,"limitXMultiplier":6,"limitYMultiplier":7,"limitZMultiplier":8,"dampen":9,"separateAxes":10,"space":11,"drag":12,"dragMultiplier":13,"multiplyDragByParticleSize":14,"multiplyDragByParticleVelocity":15},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"autoSyncTransforms":4,"autoSimulation":5,"collisionMatrix":6},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[45],"96":[51],"97":[27],"98":[27],"99":[27],"100":[27],"101":[27],"102":[27],"103":[27],"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[105],"112":[105],"113":[105],"114":[105],"115":[105],"116":[105],"117":[105],"118":[51],"119":[10],"120":[121],"122":[121],"72":[18],"13":[15],"123":[18],"78":[77],"31":[28],"30":[39],"32":[28],"124":[125],"126":[18],"127":[19,18],"74":[72],"21":[19,18],"128":[18],"73":[72],"129":[18],"130":[18],"82":[18],"131":[18],"25":[18],"132":[18],"133":[18],"134":[18],"135":[19,18],"136":[19,18],"137":[18],"138":[18],"139":[18],"79":[18],"24":[19,18],"140":[18],"141":[70],"142":[70],"71":[70],"143":[70],"144":[51],"145":[51],"146":[18],"147":[19,18],"148":[10],"149":[19,18],"150":[19,18],"151":[10,19,18],"152":[18,19],"153":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","UnselectedColliderDrawer","WheatPieceDestroyer","WheatPieceRandomizer","DisableIfTooFar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","LootableItem","LightPole","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UIActiveBoost","UnityEngine.UI.Text","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.Rigidbody","CarController","UnityEngine.GameObject","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.BoxCollider","RaceCar","HealthController","Gun","JustWheelMeshes","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DriverDescription","UnityEngine.SkinnedMeshRenderer","TrackHandles","PathCreation.PathCreator","UnityEngine.MeshCollider","FinishTrigger","GameManager","UnityEngine.Camera","Countdown","UnityEngine.CanvasGroup","LongTapButton","HealthBar","TrackContentGenerator","WheatGenerator","GhostReader","LunaUIFields","Localization","UnityEngine.TextAsset","Products","Boosts","GhostWriter","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","WinScreenWidget","UnityEngine.UI.Button","EndGameButton","UnityEngine.UI.Slider","WheatSliderWidget","ShootButtonCtrl","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","RocketsPanelCtrl","ShieldBar","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

