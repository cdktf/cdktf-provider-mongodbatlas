# `data_mongodbatlas_federated_settings_org_role_mapping`

Refer to the Terraform Registory for docs: [`data_mongodbatlas_federated_settings_org_role_mapping`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping).

# `dataMongodbatlasFederatedSettingsOrgRoleMapping` Submodule <a name="`dataMongodbatlasFederatedSettingsOrgRoleMapping` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMapping <a name="DataMongodbatlasFederatedSettingsOrgRoleMapping" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping mongodbatlas_federated_settings_org_role_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_role_mapping

dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  federation_settings_id: str,
  org_id: str,
  role_mapping_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#federation_settings_id DataMongodbatlasFederatedSettingsOrgRoleMapping#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#org_id DataMongodbatlasFederatedSettingsOrgRoleMapping#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.roleMappingId">role_mapping_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#role_mapping_id DataMongodbatlasFederatedSettingsOrgRoleMapping#role_mapping_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.federationSettingsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#federation_settings_id DataMongodbatlasFederatedSettingsOrgRoleMapping#federation_settings_id}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.orgId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#org_id DataMongodbatlasFederatedSettingsOrgRoleMapping#org_id}.

---

##### `role_mapping_id`<sup>Required</sup> <a name="role_mapping_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.Initializer.parameter.roleMappingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#role_mapping_id DataMongodbatlasFederatedSettingsOrgRoleMapping#role_mapping_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_role_mapping

dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_role_mapping

dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_role_mapping

dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.externalGroupName">external_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleAssignments">role_assignments</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsIdInput">federation_settings_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingIdInput">role_mapping_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingId">role_mapping_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `external_group_name`<sup>Required</sup> <a name="external_group_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.externalGroupName"></a>

```python
external_group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_assignments`<sup>Required</sup> <a name="role_assignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleAssignments"></a>

```python
role_assignments: DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList</a>

---

##### `federation_settings_id_input`<sup>Optional</sup> <a name="federation_settings_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsIdInput"></a>

```python
federation_settings_id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `role_mapping_id_input`<sup>Optional</sup> <a name="role_mapping_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingIdInput"></a>

```python
role_mapping_id_input: str
```

- *Type:* str

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `role_mapping_id`<sup>Required</sup> <a name="role_mapping_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.roleMappingId"></a>

```python
role_mapping_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMappingConfig <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_role_mapping

dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  federation_settings_id: str,
  org_id: str,
  role_mapping_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.federationSettingsId">federation_settings_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#federation_settings_id DataMongodbatlasFederatedSettingsOrgRoleMapping#federation_settings_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.orgId">org_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#org_id DataMongodbatlasFederatedSettingsOrgRoleMapping#org_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.roleMappingId">role_mapping_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#role_mapping_id DataMongodbatlasFederatedSettingsOrgRoleMapping#role_mapping_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `federation_settings_id`<sup>Required</sup> <a name="federation_settings_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.federationSettingsId"></a>

```python
federation_settings_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#federation_settings_id DataMongodbatlasFederatedSettingsOrgRoleMapping#federation_settings_id}.

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#org_id DataMongodbatlasFederatedSettingsOrgRoleMapping#org_id}.

---

##### `role_mapping_id`<sup>Required</sup> <a name="role_mapping_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingConfig.property.roleMappingId"></a>

```python
role_mapping_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.10.1/docs/data-sources/federated_settings_org_role_mapping#role_mapping_id DataMongodbatlasFederatedSettingsOrgRoleMapping#role_mapping_id}.

---

### DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_role_mapping

dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_role_mapping

dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference <a name="DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_federated_settings_org_role_mapping

dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasFederatedSettingsOrgRoleMapping.DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments">DataMongodbatlasFederatedSettingsOrgRoleMappingRoleAssignments</a>

---



