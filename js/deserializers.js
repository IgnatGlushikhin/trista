var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointSpring' )
  var i597 = data
  i596.spring = i597[0]
  i596.damper = i597[1]
  i596.targetPosition = i597[2]
  return i596
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointMotor' )
  var i599 = data
  i598.m_TargetVelocity = i599[0]
  i598.m_Force = i599[1]
  i598.m_FreeSpin = i599[2]
  return i598
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointLimits' )
  var i601 = data
  i600.m_Min = i601[0]
  i600.m_Max = i601[1]
  i600.m_Bounciness = i601[2]
  i600.m_BounceMinVelocity = i601[3]
  i600.m_ContactDistance = i601[4]
  i600.minBounce = i601[5]
  i600.maxBounce = i601[6]
  return i600
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointDrive' )
  var i603 = data
  i602.m_PositionSpring = i603[0]
  i602.m_PositionDamper = i603[1]
  i602.m_MaximumForce = i603[2]
  return i602
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i605 = data
  i604.m_Spring = i605[0]
  i604.m_Damper = i605[1]
  return i604
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i607 = data
  i606.m_Limit = i607[0]
  i606.m_Bounciness = i607[1]
  i606.m_ContactDistance = i607[2]
  return i606
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i609 = data
  i608.m_ExtremumSlip = i609[0]
  i608.m_ExtremumValue = i609[1]
  i608.m_AsymptoteSlip = i609[2]
  i608.m_AsymptoteValue = i609[3]
  i608.m_Stiffness = i609[4]
  return i608
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i611 = data
  i610.m_LowerAngle = i611[0]
  i610.m_UpperAngle = i611[1]
  return i610
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i613 = data
  i612.m_MotorSpeed = i613[0]
  i612.m_MaximumMotorTorque = i613[1]
  return i612
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i615 = data
  i614.m_DampingRatio = i615[0]
  i614.m_Frequency = i615[1]
  i614.m_Angle = i615[2]
  return i614
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i617 = data
  i616.m_LowerTranslation = i617[0]
  i616.m_UpperTranslation = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i618 = root || new pc.UnityMaterial()
  var i619 = data
  i618.name = i619[0]
  request.r(i619[1], i619[2], 0, i618, 'shader')
  i618.renderQueue = i619[3]
  i618.enableInstancing = !!i619[4]
  var i621 = i619[5]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i621[i + 0]) );
  }
  i618.floatParameters = i620
  var i623 = i619[6]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i623[i + 0]) );
  }
  i618.colorParameters = i622
  var i625 = i619[7]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i625[i + 0]) );
  }
  i618.vectorParameters = i624
  var i627 = i619[8]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i627[i + 0]) );
  }
  i618.textureParameters = i626
  var i629 = i619[9]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i629[i + 0]) );
  }
  i618.materialFlags = i628
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i633 = data
  i632.name = i633[0]
  i632.value = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i637 = data
  i636.name = i637[0]
  i636.value = new pc.Color(i637[1], i637[2], i637[3], i637[4])
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i641 = data
  i640.name = i641[0]
  i640.value = new pc.Vec4( i641[1], i641[2], i641[3], i641[4] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i645 = data
  i644.name = i645[0]
  request.r(i645[1], i645[2], 0, i644, 'value')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i649 = data
  i648.name = i649[0]
  i648.enabled = !!i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i651 = data
  i650.position = new pc.Vec3( i651[0], i651[1], i651[2] )
  i650.scale = new pc.Vec3( i651[3], i651[4], i651[5] )
  i650.rotation = new pc.Quat(i651[6], i651[7], i651[8], i651[9])
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i653 = data
  i652.enabled = !!i653[0]
  i652.isTrigger = !!i653[1]
  request.r(i653[2], i653[3], 0, i652, 'material')
  i652.center = new pc.Vec3( i653[4], i653[5], i653[6] )
  i652.radius = i653[7]
  return i652
}

Deserializers["UnselectedColliderDrawer"] = function (request, data, root) {
  var i654 = root || request.c( 'UnselectedColliderDrawer' )
  var i655 = data
  return i654
}

Deserializers["WheatPieceDestroyer"] = function (request, data, root) {
  var i656 = root || request.c( 'WheatPieceDestroyer' )
  var i657 = data
  return i656
}

Deserializers["WheatPieceRandomizer"] = function (request, data, root) {
  var i658 = root || request.c( 'WheatPieceRandomizer' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'partsParent')
  return i658
}

Deserializers["DisableIfTooFar"] = function (request, data, root) {
  var i660 = root || request.c( 'DisableIfTooFar' )
  var i661 = data
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'sharedMesh')
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'additionalVertexStreams')
  i664.enabled = !!i665[2]
  request.r(i665[3], i665[4], 0, i664, 'sharedMaterial')
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 2, i666, '')
  }
  i664.sharedMaterials = i666
  i664.receiveShadows = !!i665[6]
  i664.shadowCastingMode = i665[7]
  i664.sortingLayerID = i665[8]
  i664.sortingOrder = i665[9]
  i664.lightmapIndex = i665[10]
  i664.lightmapSceneIndex = i665[11]
  i664.lightmapScaleOffset = new pc.Vec4( i665[12], i665[13], i665[14], i665[15] )
  i664.lightProbeUsage = i665[16]
  i664.reflectionProbeUsage = i665[17]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i671 = data
  i670.name = i671[0]
  i670.tag = i671[1]
  i670.enabled = !!i671[2]
  i670.isStatic = !!i671[3]
  i670.layer = i671[4]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i673 = data
  i672.name = i673[0]
  i672.halfPrecision = !!i673[1]
  i672.vertexCount = i673[2]
  i672.aabb = i673[3]
  var i675 = i673[4]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( !!i675[i + 0] );
  }
  i672.streams = i674
  i672.vertices = i673[5]
  var i677 = i673[6]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i677[i + 0]) );
  }
  i672.subMeshes = i676
  var i679 = i673[7]
  var i678 = []
  for(var i = 0; i < i679.length; i += 16) {
    i678.push( new pc.Mat4().setData(i679[i + 0], i679[i + 1], i679[i + 2], i679[i + 3],  i679[i + 4], i679[i + 5], i679[i + 6], i679[i + 7],  i679[i + 8], i679[i + 9], i679[i + 10], i679[i + 11],  i679[i + 12], i679[i + 13], i679[i + 14], i679[i + 15]) );
  }
  i672.bindposes = i678
  var i681 = i673[8]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i681[i + 0]) );
  }
  i672.blendShapes = i680
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i687 = data
  i686.triangles = i687[0]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i693 = data
  i692.name = i693[0]
  var i695 = i693[1]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i695[i + 0]) );
  }
  i692.frames = i694
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i697 = data
  i696.name = i697[0]
  i696.width = i697[1]
  i696.height = i697[2]
  i696.mipmapCount = i697[3]
  i696.anisoLevel = i697[4]
  i696.filterMode = i697[5]
  i696.hdr = !!i697[6]
  i696.format = i697[7]
  i696.wrapMode = i697[8]
  i696.alphaIsTransparency = !!i697[9]
  i696.alphaSource = i697[10]
  return i696
}

Deserializers["DamagingObstacle"] = function (request, data, root) {
  var i698 = root || request.c( 'DamagingObstacle' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'parts')
  i698.m_damage = i699[2]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i701 = data
  i700.enabled = !!i701[0]
  request.r(i701[1], i701[2], 0, i700, 'sharedMaterial')
  var i703 = i701[3]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.sharedMaterials = i702
  i700.receiveShadows = !!i701[4]
  i700.shadowCastingMode = i701[5]
  i700.sortingLayerID = i701[6]
  i700.sortingOrder = i701[7]
  i700.lightmapIndex = i701[8]
  i700.lightmapSceneIndex = i701[9]
  i700.lightmapScaleOffset = new pc.Vec4( i701[10], i701[11], i701[12], i701[13] )
  i700.lightProbeUsage = i701[14]
  i700.reflectionProbeUsage = i701[15]
  request.r(i701[16], i701[17], 0, i700, 'mesh')
  i700.meshCount = i701[18]
  i700.activeVertexStreamsCount = i701[19]
  i700.alignment = i701[20]
  i700.renderMode = i701[21]
  i700.sortMode = i701[22]
  i700.lengthScale = i701[23]
  i700.velocityScale = i701[24]
  i700.cameraVelocityScale = i701[25]
  i700.normalDirection = i701[26]
  i700.sortingFudge = i701[27]
  i700.minParticleSize = i701[28]
  i700.maxParticleSize = i701[29]
  i700.pivot = new pc.Vec3( i701[30], i701[31], i701[32] )
  request.r(i701[33], i701[34], 0, i700, 'trailMaterial')
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i705 = data
  i704.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i705[0], i704.main)
  i704.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i705[1], i704.colorBySpeed)
  i704.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i705[2], i704.colorOverLifetime)
  i704.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i705[3], i704.emission)
  i704.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i705[4], i704.rotationBySpeed)
  i704.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i705[5], i704.rotationOverLifetime)
  i704.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i705[6], i704.shape)
  i704.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i705[7], i704.sizeBySpeed)
  i704.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i705[8], i704.sizeOverLifetime)
  i704.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i705[9], i704.textureSheetAnimation)
  i704.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i705[10], i704.velocityOverLifetime)
  i704.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i705[11], i704.noise)
  i704.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i705[12], i704.inheritVelocity)
  i704.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i705[13], i704.forceOverLifetime)
  i704.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i705[14], i704.limitVelocityOverLifetime)
  i704.useAutoRandomSeed = !!i705[15]
  i704.randomSeed = i705[16]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemMain()
  var i707 = data
  i706.duration = i707[0]
  i706.loop = !!i707[1]
  i706.prewarm = !!i707[2]
  i706.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[3], i706.startDelay)
  i706.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[4], i706.startLifetime)
  i706.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[5], i706.startSpeed)
  i706.startSize3D = !!i707[6]
  i706.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[7], i706.startSizeX)
  i706.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[8], i706.startSizeY)
  i706.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[9], i706.startSizeZ)
  i706.startRotation3D = !!i707[10]
  i706.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[11], i706.startRotationX)
  i706.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[12], i706.startRotationY)
  i706.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[13], i706.startRotationZ)
  i706.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i707[14], i706.startColor)
  i706.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[15], i706.gravityModifier)
  i706.simulationSpace = i707[16]
  request.r(i707[17], i707[18], 0, i706, 'customSimulationSpace')
  i706.simulationSpeed = i707[19]
  i706.useUnscaledTime = !!i707[20]
  i706.scalingMode = i707[21]
  i706.playOnAwake = !!i707[22]
  i706.maxParticles = i707[23]
  i706.emitterVelocityMode = i707[24]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i708 = root || new pc.MinMaxCurve()
  var i709 = data
  i708.mode = i709[0]
  i708.curveMin = new pc.AnimationCurve( { keys_flow: i709[1] } )
  i708.curveMax = new pc.AnimationCurve( { keys_flow: i709[2] } )
  i708.curveMultiplier = i709[3]
  i708.constantMin = i709[4]
  i708.constantMax = i709[5]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i710 = root || new pc.MinMaxGradient()
  var i711 = data
  i710.mode = i711[0]
  i710.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i711[1], i710.gradientMin)
  i710.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i711[2], i710.gradientMax)
  i710.colorMin = new pc.Color(i711[3], i711[4], i711[5], i711[6])
  i710.colorMax = new pc.Color(i711[7], i711[8], i711[9], i711[10])
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i713 = data
  i712.mode = i713[0]
  var i715 = i713[1]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i715[i + 0]) );
  }
  i712.colorKeys = i714
  var i717 = i713[2]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i717[i + 0]) );
  }
  i712.alphaKeys = i716
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i718 = root || new pc.ParticleSystemColorBySpeed()
  var i719 = data
  i718.enabled = !!i719[0]
  i718.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i719[1], i718.color)
  i718.range = new pc.Vec2( i719[2], i719[3] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i723 = data
  i722.color = new pc.Color(i723[0], i723[1], i723[2], i723[3])
  i722.time = i723[4]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i727 = data
  i726.alpha = i727[0]
  i726.time = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemColorOverLifetime()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i729[1], i728.color)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i730 = root || new pc.ParticleSystemEmitter()
  var i731 = data
  i730.enabled = !!i731[0]
  i730.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[1], i730.rateOverTime)
  i730.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[2], i730.rateOverDistance)
  var i733 = i731[3]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i733[i + 0]) );
  }
  i730.bursts = i732
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemBurst()
  var i737 = data
  i736.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[0], i736.count)
  i736.cycleCount = i737[1]
  i736.minCount = i737[2]
  i736.maxCount = i737[3]
  i736.repeatInterval = i737[4]
  i736.time = i737[5]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemRotationBySpeed()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.x)
  i738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.y)
  i738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[3], i738.z)
  i738.separateAxes = !!i739[4]
  i738.range = new pc.Vec2( i739[5], i739[6] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemRotationOverLifetime()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[1], i740.x)
  i740.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[2], i740.y)
  i740.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[3], i740.z)
  i740.separateAxes = !!i741[4]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemShape()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.shapeType = i743[1]
  i742.randomDirectionAmount = i743[2]
  i742.sphericalDirectionAmount = i743[3]
  i742.randomPositionAmount = i743[4]
  i742.alignToDirection = !!i743[5]
  i742.radius = i743[6]
  i742.radiusMode = i743[7]
  i742.radiusSpread = i743[8]
  i742.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[9], i742.radiusSpeed)
  i742.radiusThickness = i743[10]
  i742.angle = i743[11]
  i742.length = i743[12]
  i742.boxThickness = new pc.Vec3( i743[13], i743[14], i743[15] )
  i742.meshShapeType = i743[16]
  request.r(i743[17], i743[18], 0, i742, 'mesh')
  request.r(i743[19], i743[20], 0, i742, 'meshRenderer')
  request.r(i743[21], i743[22], 0, i742, 'skinnedMeshRenderer')
  i742.useMeshMaterialIndex = !!i743[23]
  i742.meshMaterialIndex = i743[24]
  i742.useMeshColors = !!i743[25]
  i742.normalOffset = i743[26]
  i742.arc = i743[27]
  i742.arcMode = i743[28]
  i742.arcSpread = i743[29]
  i742.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[30], i742.arcSpeed)
  i742.donutRadius = i743[31]
  i742.position = new pc.Vec3( i743[32], i743[33], i743[34] )
  i742.rotation = new pc.Vec3( i743[35], i743[36], i743[37] )
  i742.scale = new pc.Vec3( i743[38], i743[39], i743[40] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemSizeBySpeed()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.x)
  i744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.y)
  i744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.z)
  i744.separateAxes = !!i745[4]
  i744.range = new pc.Vec2( i745[5], i745[6] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemSizeOverLifetime()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.x)
  i746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.y)
  i746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.z)
  i746.separateAxes = !!i747[4]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.mode = i749[1]
  i748.animation = i749[2]
  i748.numTilesX = i749[3]
  i748.numTilesY = i749[4]
  i748.useRandomRow = !!i749[5]
  i748.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[6], i748.frameOverTime)
  i748.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[7], i748.startFrame)
  i748.cycleCount = i749[8]
  i748.rowIndex = i749[9]
  i748.flipU = i749[10]
  i748.flipV = i749[11]
  i748.spriteCount = i749[12]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.x)
  i750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.y)
  i750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.z)
  i750.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[4], i750.speedModifier)
  i750.space = i751[5]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemNoise()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.separateAxes = !!i753[1]
  i752.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.strengthX)
  i752.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.strengthY)
  i752.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[4], i752.strengthZ)
  i752.frequency = i753[5]
  i752.damping = !!i753[6]
  i752.octaveCount = i753[7]
  i752.octaveMultiplier = i753[8]
  i752.octaveScale = i753[9]
  i752.quality = i753[10]
  i752.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[11], i752.scrollSpeed)
  i752.scrollSpeedMultiplier = i753[12]
  i752.remapEnabled = !!i753[13]
  i752.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[14], i752.remapX)
  i752.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[15], i752.remapY)
  i752.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[16], i752.remapZ)
  i752.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[17], i752.positionAmount)
  i752.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[18], i752.rotationAmount)
  i752.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[19], i752.sizeAmount)
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemInheritVelocity()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.mode = i755[1]
  i754.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.curve)
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemForceOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.x)
  i756.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.y)
  i756.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.z)
  i756.space = i757[4]
  i756.randomized = !!i757[5]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.limitX)
  i758.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.limitY)
  i758.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.limitZ)
  i758.dampen = i759[4]
  i758.separateAxes = !!i759[5]
  i758.space = i759[6]
  i758.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.drag)
  i758.multiplyDragByParticleSize = !!i759[8]
  i758.multiplyDragByParticleVelocity = !!i759[9]
  return i758
}

Deserializers["LootableItem"] = function (request, data, root) {
  var i760 = root || request.c( 'LootableItem' )
  var i761 = data
  i760.OnLootableItemCollected = request.d('LootableItemEvent', i761[0], i760.OnLootableItemCollected)
  request.r(i761[1], i761[2], 0, i760, 'item')
  i760.kind = i761[3]
  return i760
}

Deserializers["LootableItemEvent"] = function (request, data, root) {
  var i762 = root || request.c( 'LootableItemEvent' )
  var i763 = data
  i762.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i763[0], i762.m_PersistentCalls)
  return i762
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i765 = data
  var i767 = i765[0]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i767.length; i += 1) {
    i766.add(request.d('UnityEngine.Events.PersistentCall', i767[i + 0]));
  }
  i764.m_Calls = i766
  return i764
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_Target')
  i770.m_MethodName = i771[2]
  i770.m_Mode = i771[3]
  i770.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i771[4], i770.m_Arguments)
  i770.m_CallState = i771[5]
  return i770
}

Deserializers["LightPole"] = function (request, data, root) {
  var i772 = root || request.c( 'LightPole' )
  var i773 = data
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i775 = data
  i774.pivot = new pc.Vec2( i775[0], i775[1] )
  i774.anchorMin = new pc.Vec2( i775[2], i775[3] )
  i774.anchorMax = new pc.Vec2( i775[4], i775[5] )
  i774.sizeDelta = new pc.Vec2( i775[6], i775[7] )
  i774.anchoredPosition3D = new pc.Vec3( i775[8], i775[9], i775[10] )
  i774.rotation = new pc.Quat(i775[11], i775[12], i775[13], i775[14])
  i774.scale = new pc.Vec3( i775[15], i775[16], i775[17] )
  return i774
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.Slider' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_FillRect')
  request.r(i777[2], i777[3], 0, i776, 'm_HandleRect')
  i776.m_Direction = i777[4]
  i776.m_MinValue = i777[5]
  i776.m_MaxValue = i777[6]
  i776.m_WholeNumbers = !!i777[7]
  i776.m_Value = i777[8]
  i776.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i777[9], i776.m_OnValueChanged)
  i776.m_Navigation = request.d('UnityEngine.UI.Navigation', i777[10], i776.m_Navigation)
  i776.m_Transition = i777[11]
  i776.m_Colors = request.d('UnityEngine.UI.ColorBlock', i777[12], i776.m_Colors)
  i776.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i777[13], i776.m_SpriteState)
  i776.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i777[14], i776.m_AnimationTriggers)
  i776.m_Interactable = !!i777[15]
  request.r(i777[16], i777[17], 0, i776, 'm_TargetGraphic')
  return i776
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i779 = data
  i778.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i779[0], i778.m_PersistentCalls)
  return i778
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i781 = data
  i780.m_Mode = i781[0]
  request.r(i781[1], i781[2], 0, i780, 'm_SelectOnUp')
  request.r(i781[3], i781[4], 0, i780, 'm_SelectOnDown')
  request.r(i781[5], i781[6], 0, i780, 'm_SelectOnLeft')
  request.r(i781[7], i781[8], 0, i780, 'm_SelectOnRight')
  return i780
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i783 = data
  i782.m_NormalColor = new pc.Color(i783[0], i783[1], i783[2], i783[3])
  i782.m_HighlightedColor = new pc.Color(i783[4], i783[5], i783[6], i783[7])
  i782.m_PressedColor = new pc.Color(i783[8], i783[9], i783[10], i783[11])
  i782.m_SelectedColor = new pc.Color(i783[12], i783[13], i783[14], i783[15])
  i782.m_DisabledColor = new pc.Color(i783[16], i783[17], i783[18], i783[19])
  i782.m_ColorMultiplier = i783[20]
  i782.m_FadeDuration = i783[21]
  return i782
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'm_HighlightedSprite')
  request.r(i785[2], i785[3], 0, i784, 'm_PressedSprite')
  request.r(i785[4], i785[5], 0, i784, 'm_SelectedSprite')
  request.r(i785[6], i785[7], 0, i784, 'm_DisabledSprite')
  return i784
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i787 = data
  i786.m_NormalTrigger = i787[0]
  i786.m_HighlightedTrigger = i787[1]
  i786.m_PressedTrigger = i787[2]
  i786.m_SelectedTrigger = i787[3]
  i786.m_DisabledTrigger = i787[4]
  return i786
}

Deserializers["WheatSliderWidget"] = function (request, data, root) {
  var i788 = root || request.c( 'WheatSliderWidget' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'amountText')
  request.r(i789[2], i789[3], 0, i788, 'BarIconImage')
  request.r(i789[4], i789[5], 0, i788, 'WheatImage')
  request.r(i789[6], i789[7], 0, i788, 'products')
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i791 = data
  i790.cullTransparentMesh = !!i791[0]
  return i790
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Text' )
  var i793 = data
  i792.m_FontData = request.d('UnityEngine.UI.FontData', i793[0], i792.m_FontData)
  i792.m_Text = i793[1]
  request.r(i793[2], i793[3], 0, i792, 'm_Material')
  i792.m_Maskable = !!i793[4]
  i792.m_Color = new pc.Color(i793[5], i793[6], i793[7], i793[8])
  i792.m_RaycastTarget = !!i793[9]
  return i792
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.FontData' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'm_Font')
  i794.m_FontSize = i795[2]
  i794.m_FontStyle = i795[3]
  i794.m_BestFit = !!i795[4]
  i794.m_MinSize = i795[5]
  i794.m_MaxSize = i795[6]
  i794.m_Alignment = i795[7]
  i794.m_AlignByGeometry = !!i795[8]
  i794.m_RichText = !!i795[9]
  i794.m_HorizontalOverflow = i795[10]
  i794.m_VerticalOverflow = i795[11]
  i794.m_LineSpacing = i795[12]
  return i794
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.Image' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'm_Sprite')
  i796.m_Type = i797[2]
  i796.m_PreserveAspect = !!i797[3]
  i796.m_FillCenter = !!i797[4]
  i796.m_FillMethod = i797[5]
  i796.m_FillAmount = i797[6]
  i796.m_FillClockwise = !!i797[7]
  i796.m_FillOrigin = i797[8]
  i796.m_UseSpriteMesh = !!i797[9]
  i796.m_PixelsPerUnitMultiplier = i797[10]
  request.r(i797[11], i797[12], 0, i796, 'm_Material')
  i796.m_Maskable = !!i797[13]
  i796.m_Color = new pc.Color(i797[14], i797[15], i797[16], i797[17])
  i796.m_RaycastTarget = !!i797[18]
  return i796
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i799 = data
  i798.m_IgnoreLayout = !!i799[0]
  i798.m_MinWidth = i799[1]
  i798.m_MinHeight = i799[2]
  i798.m_PreferredWidth = i799[3]
  i798.m_PreferredHeight = i799[4]
  i798.m_FlexibleWidth = i799[5]
  i798.m_FlexibleHeight = i799[6]
  i798.m_LayoutPriority = i799[7]
  return i798
}

Deserializers["HealthBar"] = function (request, data, root) {
  var i800 = root || request.c( 'HealthBar' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'HealthProvider')
  request.r(i801[2], i801[3], 0, i800, 'progressImage')
  request.r(i801[4], i801[5], 0, i800, 'BarIconImage')
  return i800
}

Deserializers["ShieldBar"] = function (request, data, root) {
  var i802 = root || request.c( 'ShieldBar' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'progressImage')
  request.r(i803[2], i803[3], 0, i802, 'barIconImage')
  request.r(i803[4], i803[5], 0, i802, 'root')
  return i802
}

Deserializers["UIActiveBoost"] = function (request, data, root) {
  var i804 = root || request.c( 'UIActiveBoost' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'imgIcon')
  request.r(i805[2], i805[3], 0, i804, 'timerImg')
  var i807 = i805[4]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('UIActiveBoost+SpriteByKind', i807[i + 0]) );
  }
  i804.sprites = i806
  i804.Kind = i805[5]
  return i804
}

Deserializers["UIActiveBoost+SpriteByKind"] = function (request, data, root) {
  var i810 = root || request.c( 'UIActiveBoost+SpriteByKind' )
  var i811 = data
  i810.Kind = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'Sprite')
  return i810
}

Deserializers["ShootButtonCtrl"] = function (request, data, root) {
  var i812 = root || request.c( 'ShootButtonCtrl' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'txtAmount')
  request.r(i813[2], i813[3], 0, i812, 'timerImg')
  request.r(i813[4], i813[5], 0, i812, 'products')
  return i812
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.Button' )
  var i815 = data
  i814.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i815[0], i814.m_OnClick)
  i814.m_Navigation = request.d('UnityEngine.UI.Navigation', i815[1], i814.m_Navigation)
  i814.m_Transition = i815[2]
  i814.m_Colors = request.d('UnityEngine.UI.ColorBlock', i815[3], i814.m_Colors)
  i814.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i815[4], i814.m_SpriteState)
  i814.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i815[5], i814.m_AnimationTriggers)
  i814.m_Interactable = !!i815[6]
  request.r(i815[7], i815[8], 0, i814, 'm_TargetGraphic')
  return i814
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i817 = data
  i816.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i817[0], i816.m_PersistentCalls)
  return i816
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_ObjectArgument')
  i818.m_ObjectArgumentAssemblyTypeName = i819[2]
  i818.m_IntArgument = i819[3]
  i818.m_FloatArgument = i819[4]
  i818.m_StringArgument = i819[5]
  i818.m_BoolArgument = !!i819[6]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i821 = data
  i820.mass = i821[0]
  i820.drag = i821[1]
  i820.angularDrag = i821[2]
  i820.useGravity = !!i821[3]
  i820.isKinematic = !!i821[4]
  i820.constraints = i821[5]
  i820.maxAngularVelocity = i821[6]
  i820.collisionDetectionMode = i821[7]
  i820.interpolation = i821[8]
  return i820
}

Deserializers["CarController"] = function (request, data, root) {
  var i822 = root || request.c( 'CarController' )
  var i823 = data
  var i825 = i823[0]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.m_WheelColliders = i824
  i822.TorqueMultiplier = i823[1]
  i822.m_CarDriveType = i823[2]
  var i827 = i823[3]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i822.m_WheelMeshes = i826
  var i829 = i823[4]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i822.m_WheelEffects = i828
  i822.m_CentreOfMassOffset = new pc.Vec3( i823[5], i823[6], i823[7] )
  i822.m_MaximumSteerAngle = i823[8]
  i822.m_SteerHelper = i823[9]
  i822.m_TractionControl = i823[10]
  i822.m_FullTorqueOverAllWheels = i823[11]
  i822.m_ReverseTorque = i823[12]
  i822.m_MaxHandbrakeTorque = i823[13]
  i822.m_Downforce = i823[14]
  i822.m_SpeedType = i823[15]
  i822.m_Topspeed = i823[16]
  i822.m_RevRangeBoundary = i823[17]
  i822.m_SlipLimit = i823[18]
  i822.m_BrakeTorque = i823[19]
  i822.m_GearNum = i823[20]
  request.r(i823[21], i823[22], 0, i822, 'm_Rigidbody')
  return i822
}

Deserializers["CarUserControl"] = function (request, data, root) {
  var i836 = root || request.c( 'CarUserControl' )
  var i837 = data
  i836.CanMove = !!i837[0]
  request.r(i837[1], i837[2], 0, i836, 'pathCreator')
  request.r(i837[3], i837[4], 0, i836, 'playerCarrot')
  request.r(i837[5], i837[6], 0, i836, 'farPointInDirectionOfView')
  request.r(i837[7], i837[8], 0, i836, 'ghostWriter')
  request.r(i837[9], i837[10], 0, i836, 'carBody')
  request.r(i837[11], i837[12], 0, i836, 'collisionParticlesLeft')
  request.r(i837[13], i837[14], 0, i836, 'collisionParticlesRight')
  return i836
}

Deserializers["UnityStandardAssets.Vehicles.Car.CarAudio"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityStandardAssets.Vehicles.Car.CarAudio' )
  var i839 = data
  i838.engineSoundStyle = i839[0]
  request.r(i839[1], i839[2], 0, i838, 'lowAccelClip')
  request.r(i839[3], i839[4], 0, i838, 'lowDecelClip')
  request.r(i839[5], i839[6], 0, i838, 'highAccelClip')
  request.r(i839[7], i839[8], 0, i838, 'highDecelClip')
  i838.pitchMultiplier = i839[9]
  i838.lowPitchMin = i839[10]
  i838.lowPitchMax = i839[11]
  i838.highPitchMultiplier = i839[12]
  i838.maxRolloffDistance = i839[13]
  i838.dopplerLevel = i839[14]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i841 = data
  i840.center = new pc.Vec3( i841[0], i841[1], i841[2] )
  i840.size = new pc.Vec3( i841[3], i841[4], i841[5] )
  i840.enabled = !!i841[6]
  i840.isTrigger = !!i841[7]
  request.r(i841[8], i841[9], 0, i840, 'material')
  return i840
}

Deserializers["RaceCar"] = function (request, data, root) {
  var i842 = root || request.c( 'RaceCar' )
  var i843 = data
  i842.Owner = i843[0]
  i842.Score = i843[1]
  request.r(i843[2], i843[3], 0, i842, 'boosts')
  request.r(i843[4], i843[5], 0, i842, 'products')
  request.r(i843[6], i843[7], 0, i842, 'boostsEffectPosition')
  request.r(i843[8], i843[9], 0, i842, 'effectSheildPrefab')
  request.r(i843[10], i843[11], 0, i842, 'effectDoublePrefab')
  return i842
}

Deserializers["HealthController"] = function (request, data, root) {
  var i844 = root || request.c( 'HealthController' )
  var i845 = data
  i844.Health = i845[0]
  i844.MaxHealth = i845[1]
  i844.Shield = i845[2]
  i844.MaxShield = i845[3]
  request.r(i845[4], i845[5], 0, i844, 'MainScreen')
  request.r(i845[6], i845[7], 0, i844, 'LossScreen')
  request.r(i845[8], i845[9], 0, i844, 'boosts')
  return i844
}

Deserializers["Gun"] = function (request, data, root) {
  var i846 = root || request.c( 'Gun' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'rocketPrefab')
  request.r(i847[2], i847[3], 0, i846, 'carUserControl')
  request.r(i847[4], i847[5], 0, i846, 'products')
  return i846
}

Deserializers["JustWheelMeshes"] = function (request, data, root) {
  var i848 = root || request.c( 'JustWheelMeshes' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.m_WheelMeshes = i850
  return i848
}

Deserializers["BlobShadowMovement"] = function (request, data, root) {
  var i852 = root || request.c( 'BlobShadowMovement' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'Target')
  i852.Offset = new pc.Vec3( i853[2], i853[3], i853[4] )
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'clip')
  i854.playOnAwake = !!i855[2]
  i854.loop = !!i855[3]
  i854.enabled = !!i855[4]
  return i854
}

Deserializers["WheelEffects"] = function (request, data, root) {
  var i856 = root || request.c( 'WheelEffects' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'SkidTrailPrefab')
  request.r(i857[2], i857[3], 0, i856, 'skidParticles')
  return i856
}

Deserializers["Rocket"] = function (request, data, root) {
  var i858 = root || request.c( 'Rocket' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'jetStream')
  request.r(i859[2], i859[3], 0, i858, 'explosionPrefab')
  return i858
}

Deserializers["Explosion"] = function (request, data, root) {
  var i860 = root || request.c( 'Explosion' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'explosionParticleSystem')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'animatorController')
  i862.updateMode = i863[2]
  var i865 = i863[3]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.humanBones = i864
  i862.enabled = !!i863[4]
  return i862
}

Deserializers["DriverDescription"] = function (request, data, root) {
  var i868 = root || request.c( 'DriverDescription' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.driverPrefab = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i873 = data
  i872.enabled = !!i873[0]
  request.r(i873[1], i873[2], 0, i872, 'sharedMaterial')
  var i875 = i873[3]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.sharedMaterials = i874
  i872.receiveShadows = !!i873[4]
  i872.shadowCastingMode = i873[5]
  i872.sortingLayerID = i873[6]
  i872.sortingOrder = i873[7]
  i872.lightmapIndex = i873[8]
  i872.lightmapSceneIndex = i873[9]
  i872.lightmapScaleOffset = new pc.Vec4( i873[10], i873[11], i873[12], i873[13] )
  i872.lightProbeUsage = i873[14]
  i872.reflectionProbeUsage = i873[15]
  request.r(i873[16], i873[17], 0, i872, 'sharedMesh')
  var i877 = i873[18]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i872.bones = i876
  i872.updateWhenOffscreen = !!i873[19]
  i872.localBounds = i873[20]
  request.r(i873[21], i873[22], 0, i872, 'rootBone')
  var i879 = i873[23]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i879[i + 0]) );
  }
  i872.blendShapesWeights = i878
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i883 = data
  i882.weight = i883[0]
  return i882
}

Deserializers["TrackHandles"] = function (request, data, root) {
  var i884 = root || request.c( 'TrackHandles' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'MainPath')
  i884.OnFinishReached = request.d('UnityEngine.Events.UnityEvent', i885[2], i884.OnFinishReached)
  request.r(i885[3], i885[4], 0, i884, 'Root')
  return i884
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i887 = data
  i886.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i887[0], i886.m_PersistentCalls)
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i889 = data
  i888.enabled = !!i889[0]
  i888.isTrigger = !!i889[1]
  request.r(i889[2], i889[3], 0, i888, 'material')
  request.r(i889[4], i889[5], 0, i888, 'sharedMesh')
  i888.convex = !!i889[6]
  return i888
}

Deserializers["FinishTrigger"] = function (request, data, root) {
  var i890 = root || request.c( 'FinishTrigger' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'trackHandles')
  return i890
}

Deserializers["PathCreation.PathCreator"] = function (request, data, root) {
  var i892 = root || request.c( 'PathCreation.PathCreator' )
  var i893 = data
  i892.editorData = request.d('PathCreation.PathCreatorData', i893[0], i892.editorData)
  i892.initialized = !!i893[1]
  return i892
}

Deserializers["PathCreation.PathCreatorData"] = function (request, data, root) {
  var i894 = root || request.c( 'PathCreation.PathCreatorData' )
  var i895 = data
  i894.vertexPathMaxAngleError = i895[0]
  i894.vertexPathMinVertexSpacing = i895[1]
  i894.showTransformTool = !!i895[2]
  i894.showPathBounds = !!i895[3]
  i894.showPerSegmentBounds = !!i895[4]
  i894.displayAnchorPoints = !!i895[5]
  i894.displayControlPoints = !!i895[6]
  i894.bezierHandleScale = i895[7]
  i894.globalDisplaySettingsFoldout = !!i895[8]
  i894.keepConstantHandleSize = !!i895[9]
  i894.showNormalsInVertexMode = !!i895[10]
  i894.showBezierPathInVertexMode = !!i895[11]
  i894.showDisplayOptions = !!i895[12]
  i894.showPathOptions = !!i895[13]
  i894.showVertexPathDisplayOptions = !!i895[14]
  i894.showVertexPathOptions = !!i895[15]
  i894.showNormals = !!i895[16]
  i894.showNormalsHelpInfo = !!i895[17]
  i894.tabIndex = i895[18]
  i894._bezierPath = request.d('PathCreation.BezierPath', i895[19], i894._bezierPath)
  i894.vertexPathUpToDate = !!i895[20]
  return i894
}

Deserializers["PathCreation.BezierPath"] = function (request, data, root) {
  var i896 = root || request.c( 'PathCreation.BezierPath' )
  var i897 = data
  var i899 = i897[0]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i899.length; i += 3) {
    i898.add(new pc.Vec3( i899[i + 0], i899[i + 1], i899[i + 2] ));
  }
  i896.points = i898
  i896.isClosed = !!i897[1]
  i896.space = i897[2]
  i896.controlMode = i897[3]
  i896.autoControlLength = i897[4]
  i896.boundsUpToDate = !!i897[5]
  var i901 = i897[6]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i901.length; i += 1) {
    i900.add(i901[i + 0]);
  }
  i896.perAnchorNormalsAngle = i900
  i896.globalNormalsAngle = i897[7]
  i896.flipNormals = !!i897[8]
  return i896
}

Deserializers["GameManager"] = function (request, data, root) {
  var i906 = root || request.c( 'GameManager' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'MainCamera')
  i906.LandscapeFov = i907[2]
  i906.PortraitFov = i907[3]
  i906.WheatCullDistance = i907[4]
  request.r(i907[5], i907[6], 0, i906, 'CountdownWidget')
  request.r(i907[7], i907[8], 0, i906, 'TutorialWindow')
  request.r(i907[9], i907[10], 0, i906, 'MainBackroundImage')
  request.r(i907[11], i907[12], 0, i906, 'WinScreen')
  request.r(i907[13], i907[14], 0, i906, 'LoseScreen')
  request.r(i907[15], i907[16], 0, i906, 'MainScreen')
  request.r(i907[17], i907[18], 0, i906, 'btnLeft')
  request.r(i907[19], i907[20], 0, i906, 'btnRight')
  request.r(i907[21], i907[22], 0, i906, 'healthBar')
  var i909 = i907[23]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.Opponents = i908
  request.r(i907[24], i907[25], 0, i906, 'PlayerCar')
  request.r(i907[26], i907[27], 0, i906, 'CarUserControl')
  i906.Position = i907[28]
  request.r(i907[29], i907[30], 0, i906, 'LastCheckpoint')
  request.r(i907[31], i907[32], 0, i906, 'healthController')
  var i911 = i907[33]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i906.tracktors = i910
  var i913 = i907[34]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i906.drivers = i912
  var i915 = i907[35]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i906.trackPrefabs = i914
  request.r(i907[36], i907[37], 0, i906, 'trackParent')
  i906._WheatCullDistance = i907[38]
  request.r(i907[39], i907[40], 0, i906, 'trackContentGenerator')
  request.r(i907[41], i907[42], 0, i906, 'wheatGenerator')
  request.r(i907[43], i907[44], 0, i906, 'ghostReader')
  return i906
}

Deserializers["LunaUIFields"] = function (request, data, root) {
  var i920 = root || request.c( 'LunaUIFields' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'ObjectiveHintText')
  i920.ObjectiveHintString = i921[2]
  request.r(i921[3], i921[4], 0, i920, 'LevelFailedButtonText')
  i920.LevelFailedButtonString = i921[5]
  request.r(i921[6], i921[7], 0, i920, 'LevelCompleteButtonText')
  i920.LevelCompleteButtonString = i921[8]
  return i920
}

Deserializers["Localization"] = function (request, data, root) {
  var i922 = root || request.c( 'Localization' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'englishAsset')
  request.r(i923[2], i923[3], 0, i922, 'russianAsset')
  return i922
}

Deserializers["WheatGenerator"] = function (request, data, root) {
  var i924 = root || request.c( 'WheatGenerator' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'wheatPiece')
  request.r(i925[2], i925[3], 0, i924, 'trackContentGenerator')
  request.r(i925[4], i925[5], 0, i924, 'carUserControl')
  return i924
}

Deserializers["Products"] = function (request, data, root) {
  var i926 = root || request.c( 'Products' )
  var i927 = data
  i926.OnProductsNumberChanged = request.d('ProductsEvent', i927[0], i926.OnProductsNumberChanged)
  return i926
}

Deserializers["ProductsEvent"] = function (request, data, root) {
  var i928 = root || request.c( 'ProductsEvent' )
  var i929 = data
  i928.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i929[0], i928.m_PersistentCalls)
  return i928
}

Deserializers["TrackContentGenerator"] = function (request, data, root) {
  var i930 = root || request.c( 'TrackContentGenerator' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'healthController')
  var i933 = i931[2]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 1, i932, '')
  }
  i930.AlreadyGenerated = i932
  request.r(i931[3], i931[4], 0, i930, 'parentForPlacing')
  var i935 = i931[5]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i930.obstaclesPrefabs = i934
  var i937 = i931[6]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i930.hardObstaclesPrefabs = i936
  var i939 = i931[7]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i930.bonusesPrefabs = i938
  request.r(i931[8], i931[9], 0, i930, 'configFile')
  request.r(i931[10], i931[11], 0, i930, 'products')
  request.r(i931[12], i931[13], 0, i930, 'boosts')
  return i930
}

Deserializers["Boosts"] = function (request, data, root) {
  var i942 = root || request.c( 'Boosts' )
  var i943 = data
  var i945 = i943[0]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('Boosts+DataItem')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('Boosts+DataItem', i945[i + 0]));
  }
  i942.Data = i944
  return i942
}

Deserializers["Boosts+DataItem"] = function (request, data, root) {
  var i948 = root || request.c( 'Boosts+DataItem' )
  var i949 = data
  i948.Kind = i949[0]
  i948.TimeLeft = i949[1]
  return i948
}

Deserializers["GhostWriter"] = function (request, data, root) {
  var i950 = root || request.c( 'GhostWriter' )
  var i951 = data
  i950.timer = i951[0]
  var i953 = i951[1]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('GhostWriter+Entry')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('GhostWriter+Entry', i953[i + 0]));
  }
  i950.data = i952
  request.r(i951[2], i951[3], 0, i950, 'carUserControl')
  return i950
}

Deserializers["GhostWriter+Entry"] = function (request, data, root) {
  var i956 = root || request.c( 'GhostWriter+Entry' )
  var i957 = data
  i956.kind = i957[0]
  i956.time = i957[1]
  i956.distance = i957[2]
  i956.sideOffset = i957[3]
  i956.speed = i957[4]
  return i956
}

Deserializers["GhostReader"] = function (request, data, root) {
  var i958 = root || request.c( 'GhostReader' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'ghost')
  request.r(i959[2], i959[3], 0, i958, 'pathCreator')
  i958.timer = i959[4]
  var i961 = i959[5]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('GhostReader+Entry')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('GhostReader+Entry', i961[i + 0]));
  }
  i958.data = i960
  return i958
}

Deserializers["GhostReader+Entry"] = function (request, data, root) {
  var i964 = root || request.c( 'GhostReader+Entry' )
  var i965 = data
  i964.kind = i965[0]
  i964.time = i965[1]
  i964.distance = i965[2]
  i964.sideOffset = i965[3]
  i964.speed = i965[4]
  return i964
}

Deserializers["UnityStandardAssets.Cameras.AutoCam"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityStandardAssets.Cameras.AutoCam' )
  var i967 = data
  i966.m_MoveSpeed = i967[0]
  i966.m_TurnSpeed = i967[1]
  i966.m_RollSpeed = i967[2]
  i966.m_FollowVelocity = !!i967[3]
  i966.m_FollowTilt = !!i967[4]
  i966.m_SpinTurnLimit = i967[5]
  i966.m_TargetVelocityLowerLimit = i967[6]
  i966.m_SmoothTurnTime = i967[7]
  request.r(i967[8], i967[9], 0, i966, 'm_Target')
  i966.m_AutoTargetPlayer = !!i967[10]
  i966.m_UpdateType = i967[11]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i969 = data
  i968.enabled = !!i969[0]
  i968.aspect = i969[1]
  i968.orthographic = !!i969[2]
  i968.orthographicSize = i969[3]
  i968.backgroundColor = new pc.Color(i969[4], i969[5], i969[6], i969[7])
  i968.nearClipPlane = i969[8]
  i968.farClipPlane = i969[9]
  i968.fieldOfView = i969[10]
  i968.depth = i969[11]
  i968.clearFlags = i969[12]
  i968.cullingMask = i969[13]
  i968.rect = i969[14]
  request.r(i969[15], i969[16], 0, i968, 'targetTexture')
  return i968
}

Deserializers["CameraFollower"] = function (request, data, root) {
  var i970 = root || request.c( 'CameraFollower' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'Target')
  i970.PositionOffset = new pc.Vec3( i971[2], i971[3], i971[4] )
  i970.RotationOffset = new pc.Vec3( i971[5], i971[6], i971[7] )
  i970.CameraSpeed = i971[8]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i973 = data
  i972.enabled = !!i973[0]
  i972.type = i973[1]
  i972.color = new pc.Color(i973[2], i973[3], i973[4], i973[5])
  i972.cullingMask = i973[6]
  i972.intensity = i973[7]
  i972.range = i973[8]
  i972.spotAngle = i973[9]
  i972.shadows = i973[10]
  i972.shadowNormalBias = i973[11]
  i972.shadowBias = i973[12]
  i972.shadowStrength = i973[13]
  i972.lightmapBakeType = i973[14]
  i972.renderMode = i973[15]
  request.r(i973[16], i973[17], 0, i972, 'cookie')
  i972.cookieSize = i973[18]
  return i972
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'm_FirstSelected')
  i974.m_sendNavigationEvents = !!i975[2]
  i974.m_DragThreshold = i975[3]
  return i974
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i977 = data
  i976.m_HorizontalAxis = i977[0]
  i976.m_VerticalAxis = i977[1]
  i976.m_SubmitButton = i977[2]
  i976.m_CancelButton = i977[3]
  i976.m_InputActionsPerSecond = i977[4]
  i976.m_RepeatDelay = i977[5]
  i976.m_ForceModuleActive = !!i977[6]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i979 = data
  i978.enabled = !!i979[0]
  i978.planeDistance = i979[1]
  i978.referencePixelsPerUnit = i979[2]
  i978.isFallbackOverlay = !!i979[3]
  i978.renderMode = i979[4]
  i978.renderOrder = i979[5]
  i978.sortingLayerName = i979[6]
  i978.sortingOrder = i979[7]
  i978.scaleFactor = i979[8]
  request.r(i979[9], i979[10], 0, i978, 'worldCamera')
  i978.overrideSorting = !!i979[11]
  i978.pixelPerfect = !!i979[12]
  i978.targetDisplay = i979[13]
  i978.overridePixelPerfect = !!i979[14]
  return i978
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i981 = data
  i980.m_UiScaleMode = i981[0]
  i980.m_ReferencePixelsPerUnit = i981[1]
  i980.m_ScaleFactor = i981[2]
  i980.m_ReferenceResolution = new pc.Vec2( i981[3], i981[4] )
  i980.m_ScreenMatchMode = i981[5]
  i980.m_MatchWidthOrHeight = i981[6]
  i980.m_PhysicalUnit = i981[7]
  i980.m_FallbackScreenDPI = i981[8]
  i980.m_DefaultSpriteDPI = i981[9]
  i980.m_DynamicPixelsPerUnit = i981[10]
  return i980
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i983 = data
  i982.m_IgnoreReversedGraphics = !!i983[0]
  i982.m_BlockingObjects = i983[1]
  i982.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i983[2] )
  return i982
}

Deserializers["Countdown"] = function (request, data, root) {
  var i984 = root || request.c( 'Countdown' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'CountdownText')
  request.r(i985[2], i985[3], 0, i984, 'Go_Image')
  request.r(i985[4], i985[5], 0, i984, 'Outline')
  request.r(i985[6], i985[7], 0, i984, 'MainWindow')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i987 = data
  i986.m_Alpha = i987[0]
  i986.m_Interactable = !!i987[1]
  i986.m_BlocksRaycasts = !!i987[2]
  i986.m_IgnoreParentGroups = !!i987[3]
  i986.enabled = !!i987[4]
  return i986
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.Outline' )
  var i989 = data
  i988.m_EffectColor = new pc.Color(i989[0], i989[1], i989[2], i989[3])
  i988.m_EffectDistance = new pc.Vec2( i989[4], i989[5] )
  i988.m_UseGraphicAlpha = !!i989[6]
  return i988
}

Deserializers["WinScreenWidget"] = function (request, data, root) {
  var i990 = root || request.c( 'WinScreenWidget' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'RaceCar')
  request.r(i991[2], i991[3], 0, i990, 'WheatText')
  request.r(i991[4], i991[5], 0, i990, 'GemText')
  request.r(i991[6], i991[7], 0, i990, 'GameManager')
  request.r(i991[8], i991[9], 0, i990, 'products')
  return i990
}

Deserializers["EndGameButton"] = function (request, data, root) {
  var i992 = root || request.c( 'EndGameButton' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'GameManager')
  return i992
}

Deserializers["LongTapButton"] = function (request, data, root) {
  var i994 = root || request.c( 'LongTapButton' )
  var i995 = data
  i994.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i995[0], i994.OnMouseDownEvent)
  i994.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i995[1], i994.OnMouseUpEvent)
  return i994
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i997 = data
  i996.m_Spacing = i997[0]
  i996.m_ChildForceExpandWidth = !!i997[1]
  i996.m_ChildForceExpandHeight = !!i997[2]
  i996.m_ChildControlWidth = !!i997[3]
  i996.m_ChildControlHeight = !!i997[4]
  i996.m_ChildScaleWidth = !!i997[5]
  i996.m_ChildScaleHeight = !!i997[6]
  i996.m_Padding = UnityEngine.RectOffset.FromPaddings(i997[7], i997[8], i997[9], i997[10])
  i996.m_ChildAlignment = i997[11]
  return i996
}

Deserializers["BoostsPanelCtrl"] = function (request, data, root) {
  var i998 = root || request.c( 'BoostsPanelCtrl' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'boosts')
  request.r(i999[2], i999[3], 0, i998, 'wgtBoostPrefab')
  return i998
}

Deserializers["TimeSinceStartup"] = function (request, data, root) {
  var i1000 = root || request.c( 'TimeSinceStartup' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'Text')
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.atlasId = i1003[1]
  i1002.mipmapCount = i1003[2]
  i1002.hdr = !!i1003[3]
  i1002.size = i1003[4]
  i1002.anisoLevel = i1003[5]
  i1002.filterMode = i1003[6]
  i1002.wrapMode = i1003[7]
  var i1005 = i1003[8]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 4) {
    i1004.push( UnityEngine.Rect.MinMaxRect(i1005[i + 0], i1005[i + 1], i1005[i + 2], i1005[i + 3]) );
  }
  i1002.rects = i1004
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.index = i1009[1]
  i1008.startup = !!i1009[2]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1011 = data
  i1010.ambientIntensity = i1011[0]
  i1010.reflectionIntensity = i1011[1]
  i1010.ambientMode = i1011[2]
  i1010.ambientLight = new pc.Color(i1011[3], i1011[4], i1011[5], i1011[6])
  i1010.ambientSkyColor = new pc.Color(i1011[7], i1011[8], i1011[9], i1011[10])
  i1010.ambientGroundColor = new pc.Color(i1011[11], i1011[12], i1011[13], i1011[14])
  i1010.ambientEquatorColor = new pc.Color(i1011[15], i1011[16], i1011[17], i1011[18])
  i1010.fogColor = new pc.Color(i1011[19], i1011[20], i1011[21], i1011[22])
  i1010.fogEndDistance = i1011[23]
  i1010.fogStartDistance = i1011[24]
  i1010.fogDensity = i1011[25]
  i1010.fog = !!i1011[26]
  request.r(i1011[27], i1011[28], 0, i1010, 'skybox')
  i1010.fogMode = i1011[29]
  var i1013 = i1011[30]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1013[i + 0]) );
  }
  i1010.lightmaps = i1012
  i1010.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1011[31], i1010.lightProbes)
  i1010.lightmapsMode = i1011[32]
  i1010.environmentLightingMode = i1011[33]
  i1010.ambientProbe = new pc.SphericalHarmonicsL2(i1011[34])
  request.r(i1011[35], i1011[36], 0, i1010, 'customReflection')
  request.r(i1011[37], i1011[38], 0, i1010, 'defaultReflection')
  i1010.defaultReflectionMode = i1011[39]
  i1010.defaultReflectionResolution = i1011[40]
  i1010.sunLightObjectId = i1011[41]
  i1010.pixelLightCount = i1011[42]
  i1010.defaultReflectionHDR = !!i1011[43]
  i1010.hasLightDataAsset = !!i1011[44]
  i1010.hasManualGenerate = !!i1011[45]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'lightmapColor')
  request.r(i1017[2], i1017[3], 0, i1016, 'lightmapDirection')
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1018 = root || new UnityEngine.LightProbes()
  var i1019 = data
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1027 = data
  i1026.name = i1027[0]
  var i1029 = i1027[1]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1029[i + 0]) );
  }
  i1026.passes = i1028
  var i1031 = i1027[2]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1031[i + 0]) );
  }
  i1026.defaultParameterValues = i1030
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1034 = root || new pc.UnityShaderPass()
  var i1035 = data
  i1034.passType = i1035[0]
  i1034.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[1], i1034.zTest)
  i1034.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[2], i1034.zWrite)
  i1034.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[3], i1034.culling)
  i1034.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1035[4], i1034.blending)
  i1034.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1035[5], i1034.alphaBlending)
  i1034.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[6], i1034.colorWriteMask)
  i1034.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[7], i1034.offsetUnits)
  i1034.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[8], i1034.offsetFactor)
  i1034.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[9], i1034.stencilRef)
  i1034.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[10], i1034.stencilReadMask)
  i1034.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[11], i1034.stencilWriteMask)
  i1034.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1035[12], i1034.stencilOp)
  i1034.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1035[13], i1034.stencilOpFront)
  i1034.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1035[14], i1034.stencilOpBack)
  var i1037 = i1035[15]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1037[i + 0]) );
  }
  i1034.tags = i1036
  var i1039 = i1035[16]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1039[i + 0]) );
  }
  i1034.variants = i1038
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1041 = data
  i1040.val = i1041[0]
  i1040.name = i1041[1]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1043 = data
  i1042.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[0], i1042.src)
  i1042.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[1], i1042.dst)
  i1042.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1043[2], i1042.op)
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1045 = data
  i1044.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[0], i1044.pass)
  i1044.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[1], i1044.fail)
  i1044.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[2], i1044.zFail)
  i1044.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[3], i1044.comp)
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1049 = data
  i1048.name = i1049[0]
  i1048.value = i1049[1]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1052.keywords = i1054
  i1052.vertexProgram = i1053[1]
  i1052.fragmentProgram = i1053[2]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.type = i1061[1]
  i1060.value = new pc.Vec4( i1061[2], i1061[3], i1061[4], i1061[5] )
  i1060.textureValue = i1061[6]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1063 = data
  i1062.name = i1063[0]
  request.r(i1063[1], i1063[2], 0, i1062, 'texture')
  i1062.aabb = i1063[3]
  i1062.vertices = i1063[4]
  i1062.triangles = i1063[5]
  i1062.textureRect = UnityEngine.Rect.MinMaxRect(i1063[6], i1063[7], i1063[8], i1063[9])
  i1062.packedRect = UnityEngine.Rect.MinMaxRect(i1063[10], i1063[11], i1063[12], i1063[13])
  i1062.border = new pc.Vec4( i1063[14], i1063[15], i1063[16], i1063[17] )
  i1062.transparency = i1063[18]
  i1062.bounds = i1063[19]
  i1062.pixelsPerUnit = i1063[20]
  i1062.textureWidth = i1063[21]
  i1062.textureHeight = i1063[22]
  i1062.nativeSize = new pc.Vec2( i1063[23], i1063[24] )
  i1062.pivot = new pc.Vec2( i1063[25], i1063[26] )
  i1062.textureRectOffset = new pc.Vec2( i1063[27], i1063[28] )
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1065 = data
  i1064.name = i1065[0]
  i1064.wrapMode = i1065[1]
  i1064.isLooping = !!i1065[2]
  i1064.length = i1065[3]
  var i1067 = i1065[4]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1067[i + 0]) );
  }
  i1064.curves = i1066
  var i1069 = i1065[5]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1069[i + 0]) );
  }
  i1064.events = i1068
  i1064.halfPrecision = !!i1065[6]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1073 = data
  i1072.path = i1073[0]
  i1072.componentType = i1073[1]
  i1072.property = i1073[2]
  i1072.keys = i1073[3]
  var i1075 = i1073[4]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1075[i + 0]) );
  }
  i1072.objectReferenceKeys = i1074
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1079 = data
  i1078.time = i1079[0]
  request.r(i1079[1], i1079[2], 0, i1078, 'value')
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1083 = data
  i1082.functionName = i1083[0]
  i1082.floatParameter = i1083[1]
  i1082.intParameter = i1083[2]
  i1082.stringParameter = i1083[3]
  request.r(i1083[4], i1083[5], 0, i1082, 'objectReferenceParameter')
  i1082.time = i1083[6]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1085 = data
  i1084.name = i1085[0]
  i1084.ascent = i1085[1]
  i1084.originalLineHeight = i1085[2]
  i1084.fontSize = i1085[3]
  var i1087 = i1085[4]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1087[i + 0]) );
  }
  i1084.characterInfo = i1086
  request.r(i1085[5], i1085[6], 0, i1084, 'texture')
  i1084.originalFontSize = i1085[7]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1091 = data
  i1090.index = i1091[0]
  i1090.advance = i1091[1]
  i1090.bearing = i1091[2]
  i1090.glyphWidth = i1091[3]
  i1090.glyphHeight = i1091[4]
  i1090.minX = i1091[5]
  i1090.maxX = i1091[6]
  i1090.minY = i1091[7]
  i1090.maxY = i1091[8]
  i1090.uvBottomLeftX = i1091[9]
  i1090.uvBottomLeftY = i1091[10]
  i1090.uvBottomRightX = i1091[11]
  i1090.uvBottomRightY = i1091[12]
  i1090.uvTopLeftX = i1091[13]
  i1090.uvTopLeftY = i1091[14]
  i1090.uvTopRightX = i1091[15]
  i1090.uvTopRightY = i1091[16]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1093 = data
  i1092.name = i1093[0]
  var i1095 = i1093[1]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1095[i + 0]) );
  }
  i1092.states = i1094
  var i1097 = i1093[2]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1097[i + 0]) );
  }
  i1092.layers = i1096
  var i1099 = i1093[3]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1099[i + 0]) );
  }
  i1092.parameters = i1098
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1103 = data
  i1102.cycleOffset = i1103[0]
  i1102.cycleOffsetParameter = i1103[1]
  i1102.cycleOffsetParameterActive = !!i1103[2]
  i1102.mirror = !!i1103[3]
  i1102.mirrorParameter = i1103[4]
  i1102.mirrorParameterActive = !!i1103[5]
  i1102.motionId = i1103[6]
  i1102.nameHash = i1103[7]
  i1102.fullPathHash = i1103[8]
  i1102.speed = i1103[9]
  i1102.speedParameter = i1103[10]
  i1102.speedParameterActive = !!i1103[11]
  i1102.tag = i1103[12]
  i1102.name = i1103[13]
  i1102.writeDefaultValues = !!i1103[14]
  var i1105 = i1103[15]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1105[i + 0]) );
  }
  i1102.transitions = i1104
  var i1107 = i1103[16]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 2, i1106, '')
  }
  i1102.behaviours = i1106
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1111 = data
  i1110.fullPath = i1111[0]
  i1110.canTransitionToSelf = !!i1111[1]
  i1110.duration = i1111[2]
  i1110.exitTime = i1111[3]
  i1110.hasExitTime = !!i1111[4]
  i1110.hasFixedDuration = !!i1111[5]
  i1110.interruptionSource = i1111[6]
  i1110.offset = i1111[7]
  i1110.orderedInterruption = !!i1111[8]
  i1110.destinationStateNameHash = i1111[9]
  i1110.destinationStateMachineId = i1111[10]
  i1110.isExit = !!i1111[11]
  i1110.mute = !!i1111[12]
  i1110.solo = !!i1111[13]
  var i1113 = i1111[14]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1113[i + 0]) );
  }
  i1110.conditions = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1119 = data
  i1118.blendingMode = i1119[0]
  i1118.defaultWeight = i1119[1]
  i1118.name = i1119[2]
  i1118.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1119[3], i1118.stateMachine)
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1121 = data
  i1120.id = i1121[0]
  i1120.defaultStateNameHash = i1121[1]
  var i1123 = i1121[2]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1123[i + 0]) );
  }
  i1120.entryTransitions = i1122
  var i1125 = i1121[3]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1125[i + 0]) );
  }
  i1120.anyStateTransitions = i1124
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1129 = data
  i1128.destinationStateNameHash = i1129[0]
  i1128.destinationStateMachineId = i1129[1]
  i1128.isExit = !!i1129[2]
  i1128.mute = !!i1129[3]
  i1128.solo = !!i1129[4]
  var i1131 = i1129[5]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1131[i + 0]) );
  }
  i1128.conditions = i1130
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1135 = data
  i1134.defaultBool = !!i1135[0]
  i1134.defaultFloat = i1135[1]
  i1134.defaultInt = i1135[2]
  i1134.name = i1135[3]
  i1134.nameHash = i1135[4]
  i1134.type = i1135[5]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.bytes64 = i1137[1]
  i1136.data = i1137[2]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1141[i + 0]) );
  }
  i1138.files = i1140
  i1138.componentToPrefabIds = i1139[1]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1145 = data
  i1144.path = i1145[0]
  request.r(i1145[1], i1145[2], 0, i1144, 'unityObject')
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1149[i + 0]) );
  }
  i1146.scriptsExecutionOrder = i1148
  var i1151 = i1147[1]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1151[i + 0]) );
  }
  i1146.sortingLayers = i1150
  var i1153 = i1147[2]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1153[i + 0]) );
  }
  i1146.cullingLayers = i1152
  i1146.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1147[3], i1146.timeSettings)
  i1146.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1147[4], i1146.physicsSettings)
  i1146.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1147[5], i1146.physics2DSettings)
  i1146.removeShadows = !!i1147[6]
  i1146.autoInstantiatePrefabs = !!i1147[7]
  i1146.enableAutoInstancing = !!i1147[8]
  i1146.lightmapEncodingQuality = i1147[9]
  i1146.desiredColorSpace = i1147[10]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1157 = data
  i1156.name = i1157[0]
  i1156.value = i1157[1]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1161 = data
  i1160.id = i1161[0]
  i1160.name = i1161[1]
  i1160.value = i1161[2]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1165 = data
  i1164.id = i1165[0]
  i1164.name = i1165[1]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1167 = data
  i1166.fixedDeltaTime = i1167[0]
  i1166.maximumDeltaTime = i1167[1]
  i1166.timeScale = i1167[2]
  i1166.maximumParticleTimestep = i1167[3]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1169 = data
  i1168.gravity = new pc.Vec3( i1169[0], i1169[1], i1169[2] )
  i1168.defaultSolverIterations = i1169[3]
  i1168.bounceThreshold = i1169[4]
  i1168.autoSyncTransforms = !!i1169[5]
  i1168.autoSimulation = !!i1169[6]
  var i1171 = i1169[7]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1171[i + 0]) );
  }
  i1168.collisionMatrix = i1170
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1175 = data
  i1174.enabled = !!i1175[0]
  i1174.layerId = i1175[1]
  i1174.otherLayerId = i1175[2]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'material')
  i1176.gravity = new pc.Vec2( i1177[2], i1177[3] )
  i1176.positionIterations = i1177[4]
  i1176.velocityIterations = i1177[5]
  i1176.velocityThreshold = i1177[6]
  i1176.maxLinearCorrection = i1177[7]
  i1176.maxAngularCorrection = i1177[8]
  i1176.maxTranslationSpeed = i1177[9]
  i1176.maxRotationSpeed = i1177[10]
  i1176.timeToSleep = i1177[11]
  i1176.linearSleepTolerance = i1177[12]
  i1176.angularSleepTolerance = i1177[13]
  i1176.defaultContactOffset = i1177[14]
  i1176.autoSimulation = !!i1177[15]
  i1176.queriesHitTriggers = !!i1177[16]
  i1176.queriesStartInColliders = !!i1177[17]
  i1176.callbacksOnDisable = !!i1177[18]
  i1176.reuseCollisionCallbacks = !!i1177[19]
  i1176.autoSyncTransforms = !!i1177[20]
  var i1179 = i1177[21]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1179[i + 0]) );
  }
  i1176.collisionMatrix = i1178
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1183 = data
  i1182.enabled = !!i1183[0]
  i1182.layerId = i1183[1]
  i1182.otherLayerId = i1183[2]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1187 = data
  i1186.weight = i1187[0]
  i1186.vertices = i1187[1]
  i1186.normals = i1187[2]
  i1186.tangents = i1187[3]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1191 = data
  i1190.mode = i1191[0]
  i1190.parameter = i1191[1]
  i1190.threshold = i1191[2]
  return i1190
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"removeShadows":6,"autoInstantiatePrefabs":7,"enableAutoInstancing":8,"lightmapEncodingQuality":9,"desiredColorSpace":10},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[51],"95":[57],"96":[34],"97":[34],"98":[34],"99":[34],"100":[34],"101":[34],"102":[34],"103":[104],"105":[104],"106":[104],"107":[104],"108":[104],"109":[104],"110":[104],"111":[104],"112":[104],"113":[104],"114":[104],"115":[104],"116":[104],"117":[57],"118":[10],"119":[120],"121":[120],"77":[18],"13":[15],"122":[18],"82":[33],"37":[35],"36":[45],"38":[35],"123":[124],"125":[18],"126":[24,18],"79":[77],"23":[24,18],"127":[18],"78":[77],"128":[18],"129":[18],"83":[18],"130":[18],"27":[18],"131":[18],"132":[18],"133":[18],"134":[24,18],"135":[24,18],"136":[18],"137":[18],"138":[18],"20":[18],"22":[24,18],"139":[18],"140":[75],"141":[75],"76":[75],"142":[75],"143":[57],"144":[57],"145":[18],"146":[24,18],"147":[10],"148":[24,18],"149":[24,18],"150":[10,24,18],"151":[18,24],"152":[18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SphereCollider","UnityEngine.MonoBehaviour","UnselectedColliderDrawer","WheatPieceDestroyer","WheatPieceRandomizer","DisableIfTooFar","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Texture2D","DamagingObstacle","UnityEngine.ParticleSystemRenderer","UnityEngine.ParticleSystem","LootableItem","LightPole","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Slider","WheatSliderWidget","UnityEngine.UI.Text","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.Sprite","UnityEngine.UI.LayoutElement","HealthBar","ShieldBar","UnityEngine.GameObject","UIActiveBoost","ShootButtonCtrl","UnityEngine.UI.Button","UnityEngine.Rigidbody","CarController","WheelEffects","CarUserControl","UnityStandardAssets.Vehicles.Car.CarAudio","UnityEngine.BoxCollider","RaceCar","HealthController","Gun","JustWheelMeshes","BlobShadowMovement","UnityEngine.AudioSource","Rocket","Explosion","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DriverDescription","UnityEngine.SkinnedMeshRenderer","TrackHandles","PathCreation.PathCreator","UnityEngine.MeshCollider","FinishTrigger","GameManager","UnityEngine.Camera","Countdown","UnityEngine.CanvasGroup","LongTapButton","TrackContentGenerator","WheatGenerator","GhostReader","LunaUIFields","Localization","UnityEngine.TextAsset","Products","Boosts","GhostWriter","UnityStandardAssets.Cameras.AutoCam","UnityEngine.AudioListener","CameraFollower","UnityEngine.LightProbeGroup","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Outline","WinScreenWidget","EndGameButton","UnityEngine.UI.HorizontalLayoutGroup","BoostsPanelCtrl","TimeSinceStartup","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ButtonInput","SWS.PathRenderer","UnityEngine.LineRenderer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer"]

Deserializers.unityVersion = "2019.4.16f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.TribezRacingPlayable";

Deserializers.disableAntiAliasing = true;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

